import { CancellationToken, CompletionItem, CompletionItemKind, CompletionItemLabel, CompletionItemProvider, MarkdownString, Position, ProviderResult, SnippetString, TextDocument,  } from 'vscode';
import { Syntax, Function } from '../util/syntax';

export default class WynnscriptCompletionItemProvider implements CompletionItemProvider {

	private syntax: Syntax;
	private classes: { name: string, methods: CompletionItem[] }[];
	private functions: CompletionItem[];
	private namespaces: CompletionItem[];
	private variables: CompletionItem[];
	private keywords: CompletionItem[];

	constructor(syntax: Syntax) {
		this.syntax = syntax;

		this.classes = this.syntax.classes.map(e => {
			return {
				name: e.name,
				methods: e.methods.map(m => {
					return ExCompletionItem(m.name, CompletionItemKind.Method, this.getDetailForFunction(m, e.name), m.docs);
				})
			}
		})

		this.functions = this.syntax.functions.map(f => {
			return ExCompletionItem(f.name, CompletionItemKind.Function, this.getDetailForFunction(f), f.docs);
		});

		this.namespaces = this.syntax.classes.filter(e => !e.isVar).map(e => {
			return ExCompletionItem(e.name, CompletionItemKind.Class, `(namespace) ${e.name}`, e.docs);
		});

		this.variables = [
			...this.syntax.classes.filter(e => e.isVar).map(e => {
				return ExCompletionItem(e.name, CompletionItemKind.Class, `(variable) ${e.name}`, e.docs);
			}),
			...this.syntax.enums.mobs.map(e => {
				return ExCompletionItem(e, CompletionItemKind.Enum, `(handler) ${e}`, this.syntax.classes.find(e => e.name === "mob")?.docs);
			})
		];

		this.keywords = this.syntax.keywords.map(e => {
			return new CompletionItem(e, CompletionItemKind.Keyword);
		});

		const item = new CompletionItem('testing', CompletionItemKind.Snippet);

		item.insertText = new SnippetString('testing ');
		item.insertText.appendChoice(['bruh', 'another']);

		this.keywords.push(item);
	}


	public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[]> {

		const regVar = /var ([_A-Za-z][_A-Za-z0-9]*) *= *[_A-Za-z]*$/;
		const regNamespace = /(^|;|\() *[_a-zA-Z]*$/;
		const regMethod = /([_A-Za-z][_A-Za-z0-9]*)\.$/;

		const line = document.lineAt(position).text.substring(0, position.character);
		let match;

		// Check for a variable declaration
		// Return variable types for completion
		if (regVar.test(line)) {
			return this.variables;
		}
		// Checks for a new line, ; or (
		// Return namespaces, variables, functions and keywords
		else if (match = regNamespace.exec(line)) {
			const newVariables: CompletionItem[] = this.getVariablesFromText(document.getText()).map(e => ExCompletionItem(e.name, CompletionItemKind.Variable, `(variable) ${e.name}: ${e.type}`));
			
			// only show namespaces and variables on the open bracket
			if (match[1] === '(') {
				return [...this.namespaces, ...newVariables]
			}

			return [...this.namespaces, ...newVariables, ...this.functions, ...this.keywords ];
		}
		// Checks for namespace or variable use
		// Return methods
		else if (match = regMethod.exec(line)) {
			let className = match[1];

			// If class name is a var or "mob" - do not show anything
			if (this.syntax.classes.filter(e => e.isVar).some(e => e.name === className) || className === "mob") {
				return []
			}

			// If class name is not in a namespace array - check code variables
			if (!this.syntax.classes.filter(e => !e.isVar).some(e => e.name === className)) {

				const codeVar = this.getVariablesFromText(document.getText()).find(e => e.name === className);
				if (codeVar !== undefined) {
					if (codeVar.mob === true) className = 'mob';
					else className = codeVar.type; 
				}
			}

			return this.classes.find(e => e.name === className)?.methods;
		}
	}

	private getVariablesFromText(text: string) {
		const regVar = /var ([_A-Za-z][_A-Za-z0-9]*) *= *([_A-Za-z][_A-Za-z0-9]*)/g;
		const result: { name: string, type: string, mob: boolean }[] = [];

		let match;
		while (match = regVar.exec(text)) {
			const codeVar = {
				name: match[1],
				type: match[2].toLowerCase(),
				mob: false
			};

			// Rename variable type to "mob" if its a handler
			if (this.syntax.enums.mobs.includes(codeVar.type)) {
				codeVar.mob = true;
			}

			result.push(codeVar);
		}

		return result;
	}

	private getDetailForFunction(fun: Function, cl?: string) {
		return `(${cl ? 'method' : 'function'})`// method if class is included, function if not
			+ `${fun.return} ` 					// return type
			+ `${cl ? `${cl}.`: ''}` 			// display class if exists
			+ `${fun.name}` 					// function name
			+ `(${fun.args[0].map(a => `${a.type} ${a.name}`).join(', ')})` // arguments of the first overload
			+ `${fun.args.length > 1 ? ` (+${fun.args.length - 1} overload${fun.args.length === 2 ? 's' : ''})` : ''}` // overload count
	}
}

function ExCompletionItem(label: string | CompletionItemLabel, kind: CompletionItemKind, detail: string, documentation?: string) {
	const item = new CompletionItem(label, kind);
	item.detail = detail;

	if (documentation !== undefined) {
		item.documentation = new MarkdownString(documentation);
	}

	return item;
}