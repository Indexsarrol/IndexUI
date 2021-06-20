
## `idx-ui`是基于`React-Hooks`的一款轻量级的`React UI`组件。
### 说明
-  ✨ 特性
   - 🌈 符合大众交互语言和视觉风格。
   - 📦 开箱即用的高质量 React 组件。
   - 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
   - 🎨 深入每个细节的主题定制能力。

-  环境支持
   - 现代浏览器和 IE11（需要 polyfills）。
   - React版本必须大于16.8.0。

### 安装
#### 使用 npm 安装
```shell
$ npm install idx-ui --save
```
#### 使用 yarn 安装(暂未开放)
```shell
$ yarn add idx-ui
```
##### 如果你的网络情况不佳，请使用[cnpm](https://github.com/cnpm/cnpm)

### 示例
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'idx-ui';
ReactDOM.render(<Button />, mountNode);
```

#### 引入样式
```js
import 'idx-ui/dist/index.css'
```
#### 按需加载
`idx-ui` 的 JS 代码默认支持基于 ES modules 的 tree shaking。

点击[这里](https://static-0b4280aa-a9f2-4f21-ada0-7be110245c41.bspapp.com/)查看说明文档。