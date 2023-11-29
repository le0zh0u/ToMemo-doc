# 动作库使用

## 小动作
小动作是指单一动作构成的单元，它在足够小的同时，也可以在使用时快速调整参数以适应不同场景的需要。

需要在动作库页面中，在顶部的切换按钮中选择「小动作」。

### 特点
- 配置简单
- 一遍调试参数一遍执行

### 预置动作

在添加小动作后，可以修改默认选择的动作。现在内置25个动作单元可供选择，同时对不同的动作都做了简单的描述。

::: details  预置动作列表
![preset_action](./images/preset_action.png)
::::

### 如何添加 - 添加后缀为例

- 导航栏「小动作」，点击导航栏右侧添加按钮，然后选择「小动作」，会出现保存小动作的弹窗。
- 点击「动作」那一行中右侧的动作名称「添加前缀」
- 自由选择需要使用的动作-『添加后缀』
- 在「后缀」输入框中输入需要在内容中添加的后缀-`是最好的应用`
- 在测试内容中输入 
``` 
ToMemo
海螺笔记
```
- 在底部的「结果」中出现了
```
ToMemo是最好的应用
海螺笔记是最好的应用
```

::: details 添加后缀-图示
![add_suffix_example](./images/add_suffix_example.jpg)
:::

#### 修改颜色

点击名称行中左侧的图标，会出现颜色选择框，不同的动作配置不同的颜色~

#### 执行模式切换
进入此页面时，默认是「自动执行」状态。下拉页面后，可以看到「自动执行」的按钮，长按此按钮可以切换执行模式。

- 自动执行： 修改参数后自动执行动作
- 手动执行： 修改参数后，需要点击「执行」按钮才会处理文本，减少大文本调试时带来的卡顿。

## 动作流
动作流是指多个动作组合而成，针对某个场景下可以快速执行的动作合集。

需要在动作库页面中，在顶部的切换按钮中选择「动作流」。

### 特点
- 针对固定场景做高阶的自动化文本处理
- 多个动作串行处理
- 动作流的编辑和执行页面拆分

### 添加动作流

- 导航栏「动作流」，点击导航栏右侧添加按钮，然后选择「动作流」，会出现添加动作流的弹窗。
- 输入名称，修改图标和颜色
- 点击「添加动作」，选择需要的动作，并配置对应的参数
- 动作添加完毕后，点击「执行」，输出测试内容，并检验结果是否符合预期
- 完成测试后，点击「保存」

### 动作流执行
在列表中，单击动作流就可以触发动作流执行。

#### 操作介绍

- 自动执行/手动执行：用于切换执行模式，如果是自动执行，意味着每次内容的变更都会自动触发执行动作；如果是手动执行，意味着需要在内容变更完成后，手动点击页面中间的执行按钮
- 删除键：清空测试内容
- 粘贴键：将剪切板内容填充到测试内容总
- 执行键：点击后执行动作，展示结果
- 复制键：复制执行后的结果
- 替换键：将测试内容替换为执行后的结果

### 动作流模版
应用中预置了不少的文本处理的动作流模版，可以直接添加使用，快速上手。
同时针对不同的动作模版，**配置了不同的测试内容，可以在选择后，点击执行，直接查看效果**

#### 清理文本
将文本中的缩进符、Emoji、多余的空格、每一行前后的空格一起删除，变成干净的文本

::: details 清理文本-图示
![action_template_clear_text_execute](./images/action_template_clear_text_execute.jpg)
:::

#### 逗号文本转列表
将通过半角逗号分割的文本内容，以列表的方式展示，并加上了行编号

::: details 逗号文本转列表-图示
![action_template_row_to_line_exmaple](./images/action_template_row_to_line_exmaple.jpg)
:::

## 动作导出与导入

### 动作导出
在小动作或者动作流中，长按需要导出的动作，然后点击「导出」，会进入导出页面。

#### 二维码导出
以图片的形式，将动作进行分发。

- 点击「复制」，可以将二维码图片拷贝到剪切板中
- 点击「分享」，唤起系统的分享菜单栏进行图片的分享动作

#### 口令导出
以文本的形式，将动作进行分发。

- 点击「复制」，可以将口令文本拷贝到剪切板中
- 点击「分享」，唤起系统的分享菜单栏进行文本的分享动作

### 动作导入

### 扫码导入
在动作库页面中，右上角的加号 - 「扫码导入」，进入扫码的弹窗，对准需要导入的动作二维码。

应用会在完成识别后，自动解析并展示导入的动作，点击保存后，动作会自动导入到对应的模块下（小动作/动作库）。

### 口令导入
复制口令，然后进入短时记忆，长按口令的那一条记录，选择「导入小动作/导入动作流」，页面自动跳转到动作库页面，并执行动作导入（弹出添加动作的弹窗）。

## 动作使用

### 应用中使用

在短时记忆中，长按需要处理的记录，在出现的菜单栏中选择「小动作」/「动作流」，点击需要的动作。

**执行结果会直接覆盖原来的内容**

### 键盘中使用

进入短时记忆页面，长按需要处理的记录，在出现的菜单栏中选择「小动作」/「动作流」，点击需要的动作。

**执行结果会直接输出，不改变原文**
