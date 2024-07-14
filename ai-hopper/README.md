# ai-hopper README


# AI Hopper Sidebar Extension

The AI Hopper Sidebar Extension for Visual Studio Code adds a custom sidebar view with buttons that open predefined URLs in your default browser. This extension is designed to enhance productivity by providing quick access to frequently used websites or resources directly from within the VS Code interface.

## Features

- **Custom Sidebar View**: Integrates a custom sidebar view within VS Code.
- **Quick Access Buttons**: Buttons for opening predefined URLs.
- **Dynamic Webview**: Uses VS Code's webview API to display HTML content.
- **Simple Configuration**: Easily customizable URLs directly within the extension code.

## Installation

You can install the AI Hopper Sidebar Extension directly from the Visual Studio Code Marketplace or by following these steps:

1. Launch VS Code.
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for "AI Hopper Sidebar Extension".
4. Click on **Install** to install it.
5. Reload VS Code.

## Usage

Once installed, follow these steps to use the AI Hopper Sidebar Extension:

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Search for and select **Show Sidebar**.
3. The sidebar will appear with buttons labeled for different URLs.
4. Click on any button to open the corresponding URL in your default web browser.

## Customization

To customize the URLs that the buttons open:

1. Open the `sidebarView.ts` file in your extension's source code.
2. Locate the `_getHtmlForWebview` method.
3. Update the URLs within the `<button>` elements to your desired links.

Example:

```typescript
<button onclick="openUrl('https://example.com')">Open Example</button>
```

4. Save your changes.
5. Reload VS Code to apply the modifications.

## Contributing

Contributions to the AI Hopper Sidebar Extension are welcome! Here are ways you can contribute:

- Report bugs or suggest new features by opening an issue.
- Submit pull requests for fixes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further based on additional features or specific details about your extension. Providing clear instructions and examples will help users understand how to use and extend your VS Code extension effectively.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code&#39;s Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
