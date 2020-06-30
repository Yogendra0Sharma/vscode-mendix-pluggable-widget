import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	let terminal: vscode.Terminal = vscode.window.createTerminal("mendix");
	terminal.show(true);
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
