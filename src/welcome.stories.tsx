import React from 'react';
import { Meta } from '@storybook/react';
import { storiesOf } from "@storybook/react"
export default {
    title: 'welcome',
  } as Meta;

export const Welcome = () => (
    <>
        <h1 className="story-h1"><code>idx-ui</code>是基于<code>React-Hooks</code>的一款轻量级的React UI组件。</h1>
        <h2 className="story-h2">✨ 特性</h2>
        <ul className="story-ul">
            <li>🌈 符合大众交互语言和视觉风格。</li>
            <li>📦 开箱即用的高质量 React 组件。</li>
            <li>🛡 使用 TypeScript 开发，提供完整的类型定义文件。</li>
            <li>🎨 深入每个细节的主题定制能力。</li>
        </ul>
        <h2 className="story-h2">环境支持</h2>
        <ul className="story-ul">
            <li>现代浏览器和 IE11（需要 polyfills）。</li>
            <li>React版本必须大于16.8.0</li>
        </ul>
        <h2 className="story-h2">安装</h2>
        <h3 className="story-h3">使用 npm 安装</h3>
        <code className="story-code">$ npm install idx-ui --save</code>
        <h3 className="story-h3">使用 yarn 安装(暂未开放)</h3>
        <code className="story-code">$ yarn add idx-ui</code>
        <p className="story-tips">如果你的网络情况不佳，请使用<a href="https://github.com/cnpm/cnpm">cnpm</a></p>
        <h2 className="story-h2">示例</h2>
        <div>
            <code className="story-code">
                {`
                import { Button } from 'idx-ui';
                `}
            </code>
        </div>
        
        <code className="story-code">
            {`
            ReactDOM.render(<Button />, mountNode);
            `}
        </code>
        <p>引入样式：</p>
        <code className="story-code">
            {`
            import 'idx-ui/dist/index.css'
            `}
        </code>
        <h3 className="story-h3">按需加载</h3>
        <code>idx-ui</code>的 JS 代码默认支持基于 ES modules 的 tree shaking。
    </>
)
