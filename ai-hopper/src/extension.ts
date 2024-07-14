import * as vscode from 'vscode';
import { SidebarProvider } from './sidebarView';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "sidebar-extension" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.openUrl1', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://example.com/url1'));
    }),
    vscode.commands.registerCommand('extension.openUrl2', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://example.com/url2'));
    }),
    vscode.commands.registerCommand('extension.openUrl3', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://example.com/url3'));
    }),
    vscode.commands.registerCommand('extension.openUrl4', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://example.com/url4'));
    }),
    vscode.commands.registerCommand('extension.showSidebar', () => {
      SidebarProvider.createOrShow(context);
    })
  );

  // Register sidebar view
  vscode.window.registerWebviewViewProvider(SidebarProvider.viewType, new SidebarProvider(context));
}
