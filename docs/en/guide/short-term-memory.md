# 短时记忆

短时记忆的功能来自`剪切板历史管理`。但是因为ios系统的限制，导致应用本身无法获取每一条剪切板，也就无从做到历史管理的核心能力。同时应用出发本身的内容管理中缺失了临时内容的管理，而这些临时内容的重要来源就是剪切板。所以让用户便捷的将剪切板内容放入短时记忆，是这一块功能一直探寻的方向之一。

## 设置
在设置界面中「短时记忆」部分有两个设置。

- 开启短时记忆功能
    - 在应用使用过程中，监听到剪切板的变化，并存入短时记忆
    - 在键盘使用过程中，将监听到的剪切板的内容存入短时记忆
    - 通过触发捷径，将内容快速保存到短时记忆。
- 记录条数
    - 提供多种选择，从10条到无限制。
    - 可以根据自己的需要选择，如果条数多了，内容也就会繁杂，增加了查找的成本；如果条数少了，随时覆盖之前复制的重要内容。

## 基础使用
### 短时记忆记录列表
点击应用右上角的闪电按钮，进入短时记忆界面。里面展示所有曾经被保存下来的闪电记忆。

### 大头针
右划短时记忆的记录，可以将操作的记录设置大头针，再次右划可以取消。

**大头针主要用于表示当前记录为未来会使用的功能**，当点击右上角垃圾桶按钮时，不会删除标记大头针的记录。

**没有置顶功能**，这个大头针只是表示不可批量清除，不会一直处在列表最前面。

### 批量删除
点击页面右上角的垃圾桶，会将所有未标识大头针的记录批量删除，达到清空剪切板历史的效果。

### 演示视频

::: details 演示视频
![short-term-memory-basic-demo.gif](/images/short-term-memory/short-term-memory-basic-demo.gif)
:::
