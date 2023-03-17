# Using OpenAI

With the recent emergence of ChatGPT, AI has immediately become the focus of attention. After experiencing ChatGPT, you can feel its powerful ability to organize and integrate text information as well as its ability to understand semantics. Considering its powerful text output capability, it can be used as a tool in the ToMemo keyboard, beginning the journey of development iteration.

## Overview of Features

The application does not use ChatGPT directly but rather a previous generation product provided by the same company. You can consider ChatGPT as version 3.5, while the AI used in the application is version 3.0. In order to use this feature, there are some prerequisites: an OpenAI account is required.

After obtaining an OpenAI account, this application can provide what features:

- Chat function similar to ChatGPT, but with extensions that focus on content instead of prompts.
- Prompt collection, which pre-sets multiple prompts for use with text content.
- Prompt template library, with pre-set high-quality prompt templates for direct use and to learn how to write excellent prompts.

## Starting the AI Journey

Go to “Settings” - “Extensions” - “OpenAI”, select “Enable OpenAI”, and enter your OpenAI account’s secret key to start exploring.

## Command Collection

Presets some commonly used commands here so that they can be directly outputted in the keyboard.

### Adding Commands

Click the plus sign above the page and there are two options: “Add” and “Add from Template Library”.

#### Add

This takes you to the custom command adding page where you need to enter the name and command content.

The command content can be viewed as a prompt template, such as “Please help me translate the following content into Chinese: {{CONTENT}}”. In this example, there is a CONTENT variable. When it is used, it will automatically replace this variable with the selected text or content from the clipboard, thus enabling one-click AI summoning.

#### Add from Template Library

Refer to the awesome-chatgpt-prompts which contains more than 100 prompt templates for ChatGPT to use in different contexts. More complete contexts can help ChatGPT better understand what you mean.

I selected only about ten of them and also did internationalization of Chinese and English. If you are in an English environment, the generated instructions will be in English; if you are in a Chinese environment, the content will be in Chinese. However, there are a few contents which did not find an appropriate Chinese translation, so I kept the English prompt. You can freely adjust the content according to your own needs after generating the instructions.

## Testing

In this page, there is a similar chat structure where you can enter the content you want to communicate and select to directly send or use a command from the command collection to achieve the goal quickly.

There are three points that need special attention:

- Chat logs are not saved. If you exit the current page, previous chat logs will automatically be cleared.
- Long-pressing chat logs can trigger the copy and resend menu options.
- Sometimes, due to network or other issues, an exception may occur. Generally, resending can restore the function.

## Using the Keyboard

In the keyboard, the entrance to OpenAI is located in the top left corner. Clicking it will take you to the control panel page, where there will be a “OpenAI” button (if it does not appear, it is because OpenAI has not been enabled. Follow the instructions above to enable it).

Once in, all the commands will be listed, along with the current workflow and top right corner function buttons.

### Top Right Corner Function Buttons

The top right corner has three to four buttons:

- Enter/Return, which can be used to send or create a new line.
- Globe, which allows for switching input methods.
- Extract Text, which reacquires any selected text in the input field.
- Settings, which takes you directly to the OpenAI Settings page.

### During Use

Regarding the current workflow:

- The cursor selection has higher priority than clipboard content.
	- If text is selected, the content displayed is the selected text.
- The cursor position cannot be identified automatically and updated into the content.
	- After the cursor is adjusted, click “Extract Text” to synchronize the selected text in the input field.
	- If the cursor has selected content, it will reacquire the content before the action is executed and automatically replace it after the result is generated.
- If the current content is not the desired one, you can hide it by clicking the X button on the right side.

Regarding the cursor:

- If the cursor is single, located between text:
	- Clicking “Extract Text” will clear selected content.
	- If a command is executed, it will be inserted at the cursor position after the result is returned.
- If the cursor selection is on, text is selected:
	- Clicking “Extract Text” will update the current workflow content.
	- If a command is executed, the selected text content will be replaced after the result is returned.

## Apply for a secret key

### Registering an account

Go to the OpenAI website and click “Register”. Follow the instructions to complete the account registration.

### Obtaining a secret key

After logging in, click on the profile icon in the upper right corner and select “View API Keys”.

Then on this page, create a “secret key” and keep it separately, as this website will not display it repeatedly. Simply enter this key into the OpenAI secret key input box above to start using OpenAI.
