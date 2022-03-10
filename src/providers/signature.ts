import { Position, ProviderResult, SignatureHelp, SignatureHelpProvider, TextDocument } from 'vscode';

export default class WynnscriptSignatureHelpProvider implements SignatureHelpProvider {

	public provideSignatureHelp(document: TextDocument, position: Position): ProviderResult<SignatureHelp> {

		const line = document.lineAt(position).text.substring(0, position.character);

		console.log("line: " + line);

		/*
		const sign: SignatureHelp = {
			activeParameter: 0,
			activeSignature: 0,
			signatures: [
				{
					label: "bruh",
					documentation: "bruhhhhh",
					parameters: [
						{
							label: "bruh",
							documentation: "aaa"
						}
					]
				},
				{
					label: "owo",
					documentation: "bruhhhhh",
					parameters: [
						{
							label: "bruh",
							documentation: "aaa"
						}
					]
				}
			]
		};*/

		return null;
	}

}