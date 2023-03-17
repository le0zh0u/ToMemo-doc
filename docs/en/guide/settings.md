# App Settings

After completing the initial actions of adding a list and a memo, enhance the user experience by enabling the following features in the app settings.

## Memo Settings

### Display Type

Control what appears when entering the app: all memos or all lists.

#### All Memos

Display all memos.

*Grouped Display*

In addition to displaying all memos, there is an option to “Group” them.

All memos are grouped by list and displayed in SORTED order making it easier to quickly scan for a list and find the corresponding memo.

#### All Lists

Displays all lists, and tapping on a list shows its corresponding memos.

## Short-Term Memory Settings

### Enable Short-Term Memory

- In the app, track changes in the clipboard and save them in short-term memory
- While using the keyboard, save the content of the clipboard into the short-term memory (requires automatic clipboard reading in keyboard settings)
- Use quick commands to quickly save clipboard content into short-term memory.

### Group by Time

When enabled, the short-term memory list view is divided into several sections: Today, Yesterday, Three Days Ago, and Seven Days Ago.Short-term memory is classified and automatically categorized into the corresponding time block based on its creation time.

### Number of Records

- Provide multiple options, from 10 to unlimited.
- Users can choose the appropriate number based on their needs. If there are too many records, the content will become cluttered, increasing the cost of finding information. If there are too few records, important previous content may be overwritten.

### Auto Clearing of Expired Records

Select the time frame for deleting expired records in the short-term memory. For example, if `3 days` is selected, any short-term memory records that are older than three days will be deleted automatically when entering ToMemo or saving the short-term memory.

### Filtering Rules

Add filtering conditions to the short-term memory, so that any content in the clipboard that matches these conditions will not be put into the short-term memory and will be directly filtered out.

### Pre-Processing Actions

Add action extensions to the short-term memory. For example, you can convert text to uppercase or lowercase, format Chinese text, or delete blank lines. This allows the content to be transformed into a usable format prior to storage.

### Memory Palace - Display Name

Choose a display name for the Memory Palace function - `Memory Palace` or `Intelligent Grouping`.

Users can choose either one as the display name for the function.

## Add Keyboard

### Add an Extension Keyboard

In the settings page, go to `Keyboard` and click on `Configure Keyboards`.

::: details Steps to add keyboard
![icloud-failed-step1.webp](/images/keyboard/keyboard-setting-tomemo.webp)

![icloud-failed-step1.webp](/images/keyboard/keyboard-enable.webp)
:::

After adding the keyboard, switch to the ToMemo keyboard while typing in an input field.

::: tip
If the ToMemo keyboard is not found while typing in the app after adding the keyboard, it may be caused by Apple’s input method cache. Force quitting the app and reopening it will allow the ToMemo keyboard to be found.
:::

After completing the keyboard addition, the keyboard interface will appear like this:
::: details ToMemo Keyboard
![keyboard-setup-finished.jpg](/images/keyboard/keyboard-setup-finished.jpg)
:::
 
#### Allow Full Access

This option is not necessary for regular use of ToMemo. However, if users need to read content from the clipboard via the keyboard, this option must be enabled.

Please refer to the [Keyboard Usage Guide](/keyboard-guide/keyboard) for more information.

### Advanced Keyboard Settings

Please refer to the [Keyboard Guide](/keyboard-guide/) for more information.

## Additional Settings

### Spotlight Search

After enabling this feature, users can search for Memos saved in the app while using Spotlight search on the home screen of their phone. Users can also quickly locate the desired Memo by searching for the list name.

### Word Segmentation

The app supports word segmentation for individual Memos and short-term memory. The keyboard also supports word segmentation for selected content.

#### Show Symbols

If this option is turned off and symbols are present, all symbols will be removed, and only the text will be segmented and displayed.

#### Extract Special Content

If this option is enabled and the content contains special formats such as URLs, email addresses, or phone numbers, they will be automatically extracted and displayed at the beginning of the segmented text to help users quickly extract and use the information.

### URL Opening Method

If a Memo or short-term memory contains a URL, users can long-press the URL to open it directly.

`Browser` - open the URL in the default browser

`In-App Pop-up` - open the URL in a popup window that appears at the bottom of the screen. Users can also navigate to a browser from within the popup window.

::: tip
Currently, it is not possible to use the in-app pop-up window to open links from within the content of a Memo. The developers are working on a solution for this issue.
:::

### New Year’s Greetings

The entrance for New Year’s greetings has been moved here. In the future, it will be expanded into a “Phrase Collection” to facilitate subscribing to various necessary phrases.

This feature is still in the planning phase.

## Data

### iCloud Sync

If the user’s phone is logged into iCloud, the app will automatically confirm the status and enable iCloud sync.

::: tip
To disable iCloud, go to the system settings menu, enter your account, and disable ToMemo’s iCloud permissions.
:::

### iCloud Not Enabled

The iCloud status in the app’s settings can appear in several different forms:
- iCloud sync is enabled.
	- This means that iCloud sync functionality has been enabled and that the user’s local device can synchronize with other devices.
- iCloud not logged in, sync unavailable.
- iCloud usage is restricted.
- Cannot confirm iCloud status.
- iCloud temporarily unavailable.

#### iCloud not logged in, sync unavailable.

Clicking on the “Go to Settings” button will take the user to the settings page.

::: details Here’s how to do it
![icloud-failed-step1.webp](/images/settings/icloud-failed-step1.webp)

![icloud-failed-step1.webp](/images/settings/icloud-signin-button.webp)

![icloud-failed-step1.webp](/images/settings/icloud-signin-ok-back.webp)
:::
Upon following the aforementioned steps, the iCloud login process will be completed, and the settings page will be refreshed to display the updated iCloud status.

#### Restricted iCloud Usage

If iCloud usage is restricted, you need to navigate to the Apple ID page for settings.

::: details Here’s how to do it
![icloud-failed-step1.webp](/images/settings/icloud-apple-id.webp)

![icloud-failed-step1.webp](/images/settings/icloud-apple-id-enable.webp)
:::

#### Unclear iCloud Status

If the iCloud status appears as `cannot confirm iCloud status` or `iCloud temporarily unavailable`, then the status is unclear. To resolve this issue, you can try logging out of iCloud and then logging back in, or simply restart your phone.

### Refreshing Data

If you have recently changed phones and haven’t yet seen your data sync to your new device, you can tap on “Refresh Data” to update and sync the data.

### Clearing Data

This option will remove all data in the app, including memos, list data, and short-term memory data. Furthermore, clearing data will also remove the index data added to Spotlight.

**Use with caution.**