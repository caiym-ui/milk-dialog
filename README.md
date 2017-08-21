# milkui-dialog

[![npm version](https://img.shields.io/npm/v/milkui-dialog.svg?style=flat)](https://www.npmjs.com/package/milkui-dialog) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](README.md)

[![NPM](https://nodei.co/npm/milkui-dialog.png?downloads=true&downloadRank=true)](https://nodei.co/npm/milkui-dialog/)

> 组件描述用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

## Overview

![image](https://user-images.githubusercontent.com/11053605/28750816-5de32266-7528-11e7-90c9-9326f460c61e.png)

## Example

```js
import Dialog from 'milkui-dialog';

<Dialog
  show={show1}
  buttons={style1.buttons}
  title={style1.title}
>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>

<Dialog
  show={show2}
  buttons={style2.buttons}
>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
```

## Properties

| Property | Type | Description | Default |
| -- | -- | -- | -- |
| className | String | 追加的 class 类名 | '' |
| title | String | 对话框标题 | '' |
| show | Boolean | 是否显示 | false |
| buttons | Array | 定义操作按钮的数组 | [] |

## Develop

```bash
cnpm i milk-dev -g    # dev tool

cnpm install

npm start
```

## Links

- [Issues](https://github.com/milk-ui/milkui-dialog/issues)
