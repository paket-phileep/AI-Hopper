import * as vscode from "vscode";

export class SidebarProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "sidebar.view";

  private _view?: vscode.WebviewView;

  constructor(private readonly context: vscode.ExtensionContext) {}

  public resolveWebviewView(webviewView: vscode.WebviewView, _context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
    };

    this._update();

    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "openUrl":
          await vscode.env.openExternal(vscode.Uri.parse(data.url));
          return;
      }
    });
  }

  private _update() {
    if (!this._view) {
      return;
    }

    this._view.webview.html = this._getHtmlForWebview();
  }

  private _getHtmlForWebview() {
    return `
      <html>
        <body>
          <button onclick="openUrl('https://example.com/url1')">Open URL 1</button>
          <button onclick="openUrl('https://example.com/url2')">Open URL 2</button>
          <button onclick="openUrl('https://example.com/url3')">Open URL 3</button>
          <button onclick="openUrl('https://example.com/url4')">Open URL 4</button>

          <script>
            const vscode = acquireVsCodeApi();

            function openUrl(url) {
              vscode.postMessage({
                type: 'openUrl',
                url: url
              });
            }
          </script>
        </body>
      </html>
    `;
  }

  public static createOrShow(context: vscode.ExtensionContext) {
    const column = vscode.ViewColumn.One;

    const panel = vscode.window.createWebviewPanel(SidebarProvider.viewType, "Sidebar View", column, {
      enableScripts: true,
    });

    const provider = new SidebarProvider(context);
    panel.webview.html = provider._getHtmlForWebview();

    panel.webview.onDidReceiveMessage(async (message) => {
      switch (message.type) {
        case "openUrl":
          await vscode.env.openExternal(vscode.Uri.parse(message.url));
          return;
      }
    });
  }
}
