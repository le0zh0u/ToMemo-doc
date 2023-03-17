# Short-term Memory Usage

## What is Short-term Memory?

The function of Short-term Memory is derived from the `Clipboard History Management`.

Each content that is copied to the clipboard can be treated as a short-term memory. It is stored in our mind and can be useful in the short term.

Due to iOS system restrictions, the application cannot collect clipboard history data when running in the background. Therefore, we need a place to quickly save and organize temporary content shared by copying and pasting. Combining this feature with clipboard history management, it becomes “Short-term Memory.”

Hence, making it convenient for users to put clipboard content into “Short-term Memory” has always been one of the directions in which this feature has been sought.

## Basic Usage

### Long-press Short-term Memory Entry

Provides options to copy, toggle star, and save as memo.

### Swipe Left to Delete

Swipe left on the short-term memory record to delete it.

### Swipe Right to Star

Swipe right on the short-term memory record to add a star icon. Swipe right again to unstar.

**The star is mainly used to indicate that the current record is a function that we will use in the future.** When deleted in bulk, the records marked with stars will not be deleted.

**There is no pin function.** If a record is pinned, the latest record will be pushed back, and you will not be able to access the latest record immediately.

### Bulk Delete

Click on the expand menu bar in the upper right corner of the screen, and select bulk delete. All non-starred entries will be deleted, and the clipboard history will be cleared.

## Short-term Memory Filtering Rules

By adding filtering rules, we can reject any unnecessary content and only allow necessary content into our memory.

::: tip
As long as the clipboard content meets the filtering rules, it will be ignored by the application and will not be saved in the Short-term Memory.
:::

### Types of Filtering Rules

- Regular Expression
	- More accurately identifies unwanted content.
- Containing Content
	- Automatically filters content that contains specific keywords.

## Pre-processing Actions for Short-term Memory

Adding some preprocessing actions can automate daily tasks and improve efficiency.

### Supported Actions

- Chinese copywriting formatting
	- Automatically adds spaces for readability when mixing Chinese and English.
- Delete blank lines
	- Too many empty lines increase reading costs.
- Delete spaces
	- The recognized content will have strange spaces that will affect subsequent use.
- Convert case
	- There is no need to manually type long text.

## Short-term Memory Details Page

After entering the details page of the short-term memory, you can directly edit the content.

### Save as Memo

Quickly convert the short-term memory into a Memo content for convenient use in the future.

### Copy

Directly copy the content of the short-term memory.

### Save

After modifying the short-term memory, save it for use in the keyboard.