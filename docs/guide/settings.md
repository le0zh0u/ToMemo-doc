# 应用设置

在初步完成添加列表和添加Memo的动作后，通过开启设置中的功能，提升幸福感。

## Memo设置

### 展示类型
主要用于控制进入应用后展示的内容是所有Memo还是所有列表。

#### 所有Memo
展示所有的Memo。
<!-- ::: details 所有Memo展示如下
![首页所有memos](/images/settings/homepage-all-memos.png)
::: -->

*「聚合展示」*

除了平铺展示所有Memo外，有一个功能选项是「聚合展示」。

将所有Memo按照列表进行聚合，按照列表的排序进行分组展示。
方便快速扫描定位列表后找到对应的Memo。
<!-- ::: details 所有Memo展示如下
![首页所有memos](/images/settings/homepage-grouped-memos.png)
::: -->

#### 所有列表
展示所有列表，点击列表查看里面的Memo
<!-- ::: details 所有列表展示如下
![首页所有memos](/images/settings/homepage-all-list.png)
::: -->

## 短时记忆设置

### 开启短时记忆功能

- 在应用使用过程中，监听到剪切板的变化，并存入短时记忆
- 在键盘使用过程中，将监听到的剪切板的内容存入短时记忆（需要在键盘设置中自动读取剪切板）
- 通过触发快捷指令，将剪切板的内容迅速保存入短时记忆

### 按照时间聚合

开启后，在短时记忆的列表页面中会分成几个区域：`今天`、`昨天`、`三天前`、`七天前`。
并将短时记忆按照创建时间自动归类到对应的时间块下。

### 记录条数

- 提供多种选择，从10条到无限制。
- 可以根据自己的需要选择，如果条数多了，内容也就会繁杂，增加了查找的成本；如果条数少了，会覆盖之前复制的重要内容。

### 过期自动清楚

选择短时记忆的过期删除时间。比如选择`3天`，会在进入ToMemo、保存短时记忆等时候自动处理3天之前加入的短时记忆。

### 开启记忆宫殿
开启后，会在短时记忆中出现「记忆宫殿」的入口。

### 显示名称
当前提供两个选择 - `记忆宫殿`、`智能分组`。

可以选择其中一个作为功能展示的名称。

## 添加键盘

### 添加扩展键盘
在设置页面中，进入到`键盘`，找到并点击`配置键盘`按钮。

::: details 添加操作如下
![icloud-failed-step1.webp](/images/keyboard/keyboard-setting-tomemo.webp)

![icloud-failed-step1.webp](/images/keyboard/keyboard-enable.webp)
:::

然后就可以在输入框中输入时切换到ToMemo键盘了。

::: tip
如果添加键盘后，没有在应用输入时找到ToMemo的键盘，这个是苹果的输入法缓存导致，需要强制退出应用后重新打开，就可以找到ToMemo键盘。
:::

完成添加后可以看到如下的键盘界面
::: details ToMemo键盘
![keyboard-setup-finished.jpg](/images/keyboard/keyboard-setup-finished.jpg)
:::

#### 允许完全访问
这个开关对于常规使用ToMemo并不需要开启，但是如果需要键盘读取剪切板内容，则需要开启。

可以在[键盘使用演示](/keyboard-guide/keyboard)中继续阅读。

### 键盘进阶设置

可以在[键盘使用](/keyboard-guide/)中继续阅读。

## 扩展设置

### Spotlight中搜索
打开此功能后，可以在手机首页，下来屏幕呼出Spotlights搜索时可以搜索到应用中保存的Memo，也可以通过搜索列表名称的方式快速定位到需要的Memo。

### 分词
应用中支持对单条Memo、短时记忆进行分词，键盘中支持对于选中的内容进行分词。

#### 显示符号
关闭后，如果内容包含了符号，会剔除所有符号，只对文字本身进行分词展示。

#### 提取特殊内容
开启后，如果内容中包含了`网址`、`邮箱`、`电话`等特殊格式的内容，会自动提取到分词结果的最前面，方便快速提取后使用。

### 网址打开方式
如果Memo或者短时记忆是网址，可以在长按后进行直接跳转。

`浏览器` - 在默认浏览器中打开网址

`应用内弹窗` - 从底部弹出弹窗打开网址，并在弹窗中可以跳转到浏览器

::: tip
如果是在Memo的详情页点击内容中的链接，暂时无法支持到应用内弹窗打开，会在后续寻找合适的解决方案。
:::

## 数据

### iCloud同步
如果手机登录了iCloud，会自动确认状态并开启iCloud同步。

::: tip 
如果需要关闭iCloud功能，可以前往系统设置的界面，进入账号，在那里关闭ToMemo的iCloud权限。
::: 

### iCloud未正常开启
设置中iCloud状态会有以下几种情况：
- iCloud同步已开启
    - 表示已经开启了iCloud同步的功能，本机上的操作可以同步到其他设备上
- iCloud未登录，同步不可用
- iCloud使用受限
- 无法确认iCloud状态
- iCloud暂时不可用

#### iCloud未登录，同步不可用
通过点击【前往设置】按钮，跳转到设置界面。

::: details 操作如下
![icloud-failed-step1.webp](/images/settings/icloud-failed-step1.webp)

![icloud-failed-step1.webp](/images/settings/icloud-signin-button.webp)

![icloud-failed-step1.webp](/images/settings/icloud-signin-ok-back.webp)
:::
按照上面的步骤，完成了iCloud的登录操作，重新打开设置页面，会刷新iCloud的状态。

#### iCloud使用受限
如果这个情况，并且已经登录，等需要进入到Apple ID页面进行设置。
::: details 操作如下
![icloud-failed-step1.webp](/images/settings/icloud-apple-id.webp)

![icloud-failed-step1.webp](/images/settings/icloud-apple-id-enable.webp)
:::

#### iCloud状态不明
如果处于`无法确认iCloud状态`和`iCloud暂时不可用`这两种情况，属于iCloud状态不明，需要**重新登录后重试**，或者**重启手机**。

### 刷新数据
如果更换手机后，打开应用后，发现数据还未同步进来，可以在这里点击刷新数据，并稍等一会后，数据便会自动同步进来。

### 清除数据

清除应用中所有数据（Memo数据、列表数据和短时记忆的数据），同时会清除应用添加到Spotlight中的索引数据。

**需要慎重**



