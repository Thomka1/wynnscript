import { ExtensionContext, languages, workspace } from 'vscode';
import { Syntax } from './util/syntax';
import WynnscriptCompletionItemProvider from './providers/completion';
import WynnscriptDiagnosticProvider from './providers/diagnostic';
import ky from 'ky';

export async function activate(context: ExtensionContext) {
	
	// Downloads wynnscript syntax
	// On successful download - enables extension
	const syntax: Syntax = await ky.get("https://gist.githubusercontent.com/Thomka1/e180411c78f241c8a1f12cc630f972dd/raw").json();

	const diagnostic = new WynnscriptDiagnosticProvider(syntax);

	context.subscriptions.push(
		languages.registerCompletionItemProvider('wynnscript', new WynnscriptCompletionItemProvider(syntax), '.'),
		//languages.registerSignatureHelpProvider('wynnscript', new WynnscriptSignatureHelpProvider(), '(', ','),
		workspace.onDidOpenTextDocument(doc => diagnostic.snek(doc)),
		workspace.onDidCloseTextDocument(doc => diagnostic.delete(doc)),
		workspace.onDidChangeTextDocument(docEvent => diagnostic.snek(docEvent.document))
	);
}