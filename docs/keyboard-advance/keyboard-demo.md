# 键盘使用演示

**键盘中图标**
![keyboard-icons-description.jpg](/images/keyboard/keyboard-icons-description.jpg)

## 删除
基础的删除功能

**删除至行首**

增加扩展功能，整行删除，方便在输错的时候及时止损。

## 输入法切换

此功能需要在设置中开启「输入后自动切回上个输入法」。

![globe](/images/keyboard/globe@2x.png)
表示未启用自动切换回上个输入法，需要点击此图标进行输入法切换

![globe.badge.chevron.backward](/images/keyboard/globe.badge.chevron.backward@2x.png)
表示启用自动切换回上个输入法，点击Memo、剪切板或短时记忆后会自动切换回上个输入法。

**举手的功能代表是否`Hold on`自动切换功能。**

![hand.raised@2x.png](/images/keyboard/hand.raised@2x.png)
表示没有暂停自动切换，会点击输入后，自动跳转回上一个输入法

![hand.raised.fill@2x.png](/images/keyboard/hand.raised.fill@2x.png)
表示暂停自动切换，本次点击输入不触发输入法跳转。

::: details 演示视频
![keyboard-auto-switch-demo.gif](/images/keyboard/keyboard-auto-switch-demo.gif)
:::

## 分词
在键盘中开启分词后，点击Memo、剪切板或者短时记忆的内容，可以出发分词的动作，在键盘的功能结果栏中会展示分词结果。

选完需要的词组后，点击功能结果栏最右侧的向上输入的按钮后，会自动将选中的内容输入。

::: details 演示视频
![keyboard-participles-demo.gif](/images/keyboard/keyboard-participles-demo.gif)
:::

## 自动读取剪切板
在键盘设置中有一个「自动读取剪切板」的选项。

### 开启后
只要键盘使用过程中，会自动读取剪切板内容，监听剪切板的变化，并将每一次变化内容放到「功能结果栏」中。
- 如果有多台设备使用同一个iCloud账号，并开启了HandOff的功能，在其他设备中复制的内容，也可以在键盘中被读取到，然后直接进行使用。
- 如果开启了「短时记忆」，会在每次监听到变化后，自动保存到短时记忆中，方便后续再次使用。

### 关闭后
- 键盘不会监听剪切板内容的变化
- 会导致「短时记忆」的键盘功能受到影响，无法及时获取剪切板变化保存到历史记录中。

## 短时记忆
在键盘首行的功能栏中，闪电符号代表了「短时记忆」功能。

**点击闪电符号**，可以展示之前的「短时记忆」的记录，并直接输出到输入框中。

**长按闪电符号**，可以直接跳转到应用的「短时记忆」界面。

在「功能结果栏」中
- 显示闪电+A的符号，意味着当前这条内容已经成功添加到了「短时记忆」
- 显示剪切板的符号，意味着监听到剪切板变化，但没有添加到「短时记忆」
    - 可能是内容与最新的一条「短时记忆」重复 
    - 可能是短时记忆没有开启

::: details 演示视频
![keyboard-short-term-memory-debo.gif](/images/keyboard/keyboard-short-term-memory-debo.gif)
:::

::: tip 提示
- 短时记忆功能的关闭不会影响自动读取剪切板的功能。只是无法将读取到内容自动保存到短时记忆中。
- 如果在使用过程不断提示是否允许ToMemo粘贴，可以在设置中设置成始终允许，这样就不会再提示。 - 针对iOS16及以后
:::

## 基础功能
例如隐藏键盘、回车等基础功能不再说明和演示。

点击键盘中“ToMemo”右侧的箭头，可以直接打开ToMemo应用

::: tip 最后
希望可以灵活使用键盘中的功能，例如自动切换 + 本次暂停等功能，动态调整本次输出内容的条数，提升内容输出的效率。
:::
