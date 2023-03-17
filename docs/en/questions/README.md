# Questions

## How to use the New Year’s blessing phrases?

After entering “Settings-New Year’s Blessing”, the list will display the New Year’s blessing phrases that have been obtained. The buttons in the upper right corner of the page are `Link` and `Refresh`.

`Link` - Enter the configuration page, where you can choose the data retrieval address from [Github](https://raw.iqiq.io/le0zh0u/ToMemo-doc/happynewyear-data/data/happy_newyear.json) and [Gitlab](https://gitlab.com/leozhou/ToMemo-doc/-/raw/happynewyear-data/data/happy_newyear.json).

`Refresh` - When the remote data is updated but the local data is not, you can use this button to re-fetch the data.

### List

In the data list, you can `click` and `long press`.

`Click` - Copy the blessing phrase, find a suitable blessing phrase, and manually send it to the corresponding person. The sender information will be automatically replaced here.

`Long press` - You can save it as a Memo with one click, and then send the designated text through Memo in the keyboard.

### Keyboard

The entrance in the keyboard: Click on `the logo in the upper left corner`.

After entering, click on `New Year’s Blessing`, which will display all categories. Clicking on different categories will display different contents.

**Each click randomly selects a phrase from the content of the category. When there are multiple clicks, the previously added content will be automatically overwritten.** The content will automatically replace the sender information.

**If there is content that needs to be modified, there will be a message reminder at the top of the keyboard**. Please pay attention to it.

### Configuration

Click on `the link ` to enter the configuration interface. In addition to configuring the data retrieval address, you can also configure the content that needs to be automatically replaced in the blessing template - the sender.

In many blessing sentences, there are template contents such as `xxx wishes you` and `xxx respectfully`. Since the sender is fixed, after filling it in, the xxx part above will be automatically replaced to facilitate quick sending in the keyboard.

As for the many blessing phrases that contain `the name of the recipient`, since this variable changes too much, it is not included as a configurable content. However, in the keyboard, if the generated text contains the specified character, there will be a prompt message that needs to be checked.

## I heard that you can copy continuously and add it all at once, but it doesn’t work. What should I do?

The continuous copy function is used in conjunction with Shortcuts. Shortcuts is an application made by Apple. If it has been deleted, you can go to the App Store to download it first.

Then refer to the detailed tutorial in [「Short-term Memory + Shortcut Key / Use Shortcuts to Add Short-term Memory」](/short-term-memory-advance/), which includes the download address of Shortcuts and the combination method of AssistiveTouch. Follow the demo video to add step by step.

## Can I set the shortcut keyboard to open the clipboard history when entering it?

Yes, you need to go to “Settings”, find the “Keyboard” section, and then find “Retention Time for Use Panel”. Choose “Always”.

This will automatically enter “short-term memory” every time you open the keyboard, allowing for quick paste.

## In iOS16, the prompt to allow pasting often pops up, which greatly affects the experience.

You need to go to the system “Settings” and find “ToMemo”. After entering the settings, set the “Allow Pasting from Other Apps” function to “Allow”.

::: details
![ios16-paste-warning.jpg](/images/questions/ios16-paste-warning.jpg)
:::

## What should I do if I can’t find ToMemo when switching keyboards after adding it?

This is because the system has some cache. Just force close the current app and reopen it, and then you will see ToMemo.

If it still doesn’t work, try re-adding the ToMemo keyboard.

## What does the "retention time" in settings mean?

There are currently two retention time settings, and the operation principle is the same.

**It is short for “Retention Time for Use Panel”.**

`Short-term memory panel retention time`
- If “1 minute” is set, after entering the ToMemo keyboard, click on the lightning icon to enter “short-term memory”, and then click on the input content A. As long as it is within “1 minute”, when you invoke the ToMemo keyboard again, you will automatically enter “short-term memory”, which makes it convenient to quickly add other content inside.
- If set to “Always”, it means that each time you invoke the keyboard, you will first enter “short-term memory”, which makes it convenient to directly paste clipboard history.

`List retention time`
- Can only be used when the first screen of the keyboard is a list
- As long as the set time is greater than 0, every time you use the ToMemo keyboard, enter the list, and click on a Memo input, within the X minutes set, every time you invoke the ToMemo keyboard again, it will automatically enter the list selected above.

The retention time settings will overlap with each other. For example, after clicking on an input in short-term memory, the next time you select a Memo input in the list, the display will be judged according to whether it meets the list retention condition when you enter the keyboard next time.

::: details Retention Time Demo Video
![retained-interval-demo.gif](/images/questions/retained-interval-demo.gif)
:::

## What if I need to create a large number of Memos?

ToMemo has the **Batch Import** function.

Firstly, you need a list. Go to the list details page, and there is a “Batch Add” button in the bottom right corner.

After clicking it, organize the content according to the template example in the import interface, and then directly paste it in. Of course, you can also edit it in the input box, which has a shortcut input button for separators in the lower right corner.

Click the preview button to see if it meets your expectations, and then you can save the import.
