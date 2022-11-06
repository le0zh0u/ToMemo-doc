---
title: Introduction
---
# Introduction

ToMemo is a superb note app for frequently used content notes and short-time content recording.

## Idea

ToMemo's core point: `digital content management`.

This product is, as its name suggests, a memo (sticky note) application. In the process of using a cell phone, sometimes you suddenly need to keyboard some content, such as `email address`, `delivery address`, `ID card`, `daily template`, `notify others text`. Although the frequency of occurrence is not high every day, every time we encounter it, we either interrupt the text greatly, switch input methods and punctuation; or we can't think of it and need to find the original to continue the operation. This interrupts our sustained concentration while also silently killing time again and again.

Sometimes, I think and try to figure out what to do with the content.

- Take a photo and put it in an album? As the number of photos increases, finding them is a problem
- Come across them and then deal with them? Affect your mood and interrupt the flow of work
- Deal with it afterwards? You forget about it as time passes, and when you remember it again, you're stuck in a cycle.
- Where can I put them? Memo? All kinds of note taking software? Drafting software of any kind? Clipboard management tools?


经过尝试，并不能找到适合自己方式的使用方式。同时也感知到，不同类型的（不同用处）的内容，背后的使用动机是不太一致的。如同我们大脑处理不同的信息时，使用的分类也不一样。
- 瞬时内容：来自复制粘贴，用完就可以遗忘。
- 短时内容：来自不同的渠道，但是需要隔一段时间再次使用，是需要清空和管理的。
- 长期内容：来自积累和整理，了解自己会用到哪些，并在合适的场景直接使用。

同时参考了工作的四象限模型（重要性+优先级）将我们接受到的内容进行分类：
- 低频低权重
- 低频高权重
- 高频低权重
- 高频高权重

对于我自己而言，我希望自己能尽可能高效地处理低频高权重的内容，高质量地处理高频高权重的内容。每个人对于内容分类归属会不同，但对于高权重这个属性相似度都会比较高。自己后续会针对这一方向去思考和设计应用。

与此同时，对于扑面而来的信息，也需要能高效地将高频出现的内容分出权重，并分配不同的关注度。

### 使用场景
- **各种地址**（公司地址，家庭地址，外卖地址，老家地址，女朋友家地址）又臭又长，虽然都能记住但是时不时导航啊，寄快递啊需要用到
- **各种银行卡号**，虽然付钱都用电子支付，但是万年难得一用的卡号万一需要用到却又没有呆在身边
- **各种证件**，自己的身份证号不用担心，除了长一些，但是女朋友的，爸妈的，岳父岳母的等等，这些都是需要时急切，不用时扔之可惜，需要一个地方记录一下
- 不推荐 - **简单的密码**，现在网上的密码已经不是123456能应付的，基本都是大小写加字符，手机上输入法中切换麻烦，非核心的密码也可以在这里存储使用，比如临时注册的账号用一个统一的密码。但是支付宝、微信等密码强烈不建议存储，最好放在自己脑子中
- **各种邮箱地址**，用到地方不多，但是用到了需要输入一串的字符，然后切换面板的内容到符号页，再切回来，太麻烦了。
- **各种模板**，工作邮件回复的模板、客户通知模板、审批流模板。电脑中都有存，但手机中还真一下子找不到
- **信息传递**，常见问题形成末班回复，工作信息传达给不同来咨询的人等等，数字世界中每个人都会有信息需要重复传播给其他人。
- **其他杂项**，一些平时用不到，但会用到，且容易忘记的东西，比如社保卡号，公司营业执照等等

### 名称来源
以备忘录`Memo`为核心，从形状上参考了`potato`，最终合成`ToMemo`。

### 目标

应用核心目标：`效率`。

## 当前功能
- Memo
    - 按模板批量添加
- Memo List
- 首屏自定义内容展示 
    - 所有Memo | Memo按列表聚合
    - 所有列表
- iCloud多设备同步
- 短时记忆 <Badge type="danger" text="LAB" vertical="middle" />
    - 聚集剪切板历史
    - 键盘快速添加
    - 捷径快速添加
    - 历史管理
- 第三方扩展键盘
    - 键盘内容 - 聚合Memo | 所有列表 <Badge type="danger" text="LAB" vertical="middle" />
    - 自动读取剪切板 <Badge type="danger" text="LAB" vertical="middle" /> 
    - 自定义列表留存时长
    - 左右滑动切换列表 
    - 键盘单行列数 
    - 自定义键盘高度
    - 输入后自动切回上一个输入法 
- Spotlight搜索 
- 支持小组件


## 功能规划
- 长期内容
    - 加强内容类型支持，支持文件类、图片类存储
    - 支持动态变量自动替换
    - 加强内容扩展动作
- 特色功能
    - 分词功能优化
    - 增加动态属性，例如时间、日期等
    - 参考Drafts加强内容输出能力
    - 输入导入与导出
    - 按键声音
- 高价值内容
    - 短时记忆转化为Memo
    - 短时记忆内容编辑
    - 短时记忆智能归档
- 主要版本
    - Mac应用开发