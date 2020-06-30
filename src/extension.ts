import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	let terminal: vscode.Terminal = vscode.window.createTerminal("mendix");
	terminal.show(true);


	let installNodeJS = vscode.commands.registerCommand('extension.installNodeJS', () => {

		terminal.sendText(`Invoke-WebRequest -Uri "https://raw.githubusercontent.com/gunnargestsson/AdvaniaGIT/master/Scripts/Install-AdvaniaGIT.ps1" -OutFile "$($env:TEMP)\\Install-AdvaniaGIT.ps1" -ErrorAction Stop`);
		terminal.sendText(`& "$($env:TEMP)\\Install-AdvaniaGIT.ps1"`);

	});
	context.subscriptions.push(installNodeJS);

	let installGenerator = vscode.commands.registerCommand('extension.installGenerator', () => {
		terminal.sendText("npm install -g yo @mendix/generator-widget");
	});

	context.subscriptions.push(installGenerator);

	let createWidget = vscode.commands.registerCommand('extension.createWidget', () => {
		let project = vscode.window.showInputBox({ placeHolder: 'Enter Name of your Widget:' }).then(
			(widgetName) => {
				terminal.sendText("yo @mendix/widget " + widgetName);
			}
		);
	});
	context.subscriptions.push(createWidget);
}
export function deactivate() { }
