# AI Hopper


Certainly! Here’s a basic README template for your VS Code extension:

---

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
