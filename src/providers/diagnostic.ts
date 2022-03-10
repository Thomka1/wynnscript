import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, languages, Position, Range, TextDocument } from 'vscode';
import { ANTLRErrorListener, CharStreams, CommonTokenStream, Recognizer, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DeclarationContext, WynnscriptParser } from '../antlr4/WynnscriptParser';
import { WynnscriptListener } from '../antlr4/WynnscriptListener';
import { WynnscriptLexer } from '../antlr4/WynnscriptLexer';
import { Syntax } from '../util/syntax';

export default class WynnscriptDiagnosticProvider {

	private syntax: Syntax;
	private diagnostic: DiagnosticCollection;
	private syntaxErrors: SyntaxErrorListener;
	private contextErrors: ContextErrorListener;

	constructor(syntax: Syntax) {
		this.syntax = syntax;
		this.diagnostic = languages.createDiagnosticCollection('wynnscript');

		this.syntaxErrors = new SyntaxErrorListener();
		this.contextErrors = new ContextErrorListener(this.syntax);
	}

	snek(doc: TextDocument) {
		// Ignore if open file is not using wynnscript language
		if (languages.match("wynnscript", doc) === 0) return;
		
		// clear errors
		this.syntaxErrors.errors = [];
		this.contextErrors.errors = [];

		const parser = new WynnscriptParser(new CommonTokenStream(new WynnscriptLexer(CharStreams.fromString(doc.getText()))));
		parser.removeErrorListeners();
		parser.addErrorListener(this.syntaxErrors);
		ParseTreeWalker.DEFAULT.walk(this.contextErrors as WynnscriptListener, parser.file());
	
		this.diagnostic.set(doc.uri, [...this.syntaxErrors.errors, ...this.contextErrors.errors]);
	}	

	delete(doc: TextDocument) {
		this.diagnostic.delete(doc.uri);
	}
}

class SyntaxErrorListener implements ANTLRErrorListener<Token> {

	errors: Diagnostic[] = [];

	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string) {
		this.errors.push(error(msg, line, charPositionInLine));
	}
}

class ContextErrorListener implements WynnscriptListener {

	errors: Diagnostic[] = [];
	
	private rules = {
		validVariables: [] as string[]
	};

	constructor(syntax: Syntax) {
		this.rules.validVariables = [
			...syntax.classes.filter(e => e.isVar === true && e.name !== 'mob').map(e => e.name),
			...syntax.enums.mobs
		]
	}

	enterDeclaration(context: DeclarationContext) {
		const varType = context.getChild(3) as TerminalNode;

		if (!this.rules.validVariables.includes(varType.text.toLowerCase())) {
			this.errors.push(error(`'${varType.text}' is not a valid type`, varType.symbol.line, varType.symbol.charPositionInLine));
		}
	}
}

function error(msg: string, line: number, char: number): Diagnostic {
	return new Diagnostic(new Range(new Position(line - 1, char), new Position(line - 1, char)), msg, DiagnosticSeverity.Error);
}