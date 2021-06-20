import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import notification from './Notification';
import Icon from '../Icon/icon';
import Button from '../Button/Button';
import '../../styles/stories.scss';
export default {
    title: 'Notification',
    // component: message
  } as Meta;

  export const BasicNotification = () => (
    <Fragment>
        <div style={{ width: '100%' }}>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'success', message: '成功弹窗！', description: '成功弹窗描述' })}>成功弹窗</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'error', message: '失败弹窗！', description: '失败弹窗描述' })}>失败弹窗</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'info', message: '信息弹窗！', description: '信息弹窗描述' })}>信息弹窗</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'warning', message: '警告弹窗！', description: '警告弹窗描述' })}>警告弹窗</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'loading', message: '加载弹窗！', description: '加载弹窗描述' })}>加载弹窗</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'info', message: '弹窗不关闭！', description: '弹窗不关闭', duration: 0 })}>弹窗不关闭</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ type: 'info', message: '可关闭弹框！', description: '可关闭弹框', closable: true })}>可关闭弹框</Button>
            <Button style={{ marginRight: 10 }} onClick={() => notification.open({ icon: <Icon icon="smile-wink" />, type: 'info', message: '切换图标', description: '切换图标描述', closable: true })}>切换图标</Button>
        </div>
        <p style={{ margin: '10px 0 0 0' }}>因技术问题，暂时无法实现自动生成对notification的文档说明！notification的属性如下：</p>
        <h3 style={{ margin: '10px 0 0 0' }}>notification全局方法</h3>
        <table className="stories-table">
            <thead>
                <tr>
                    <th>名称</th>
                    <th style={{ width: 300 }}>描述</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody className="storied-table-tbody">
                <tr>
                    <td>open</td>
                    <td>默认打开弹窗方法</td>
                    <td><span className="code">{`(configs: IMessageConfigProps) => void`}</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>config</td>
                    <td>全局配置方法</td>
                    <td><span className="code">{`(configs: globalMessageConfigs) => void`}</span></td>
                    <td>--</td>
                </tr>
            </tbody>
        </table>

        <h3 style={{ margin: '10px 0 0 0' }}>INotificationConfigProps</h3>
        <table className="stories-table">
            <thead>
                <tr>
                    <th>名称</th>
                    <th style={{ width: 300 }}>描述</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody className="storied-table-tbody">
                <tr>
                    <td>type</td>
                    <td>消息框提示类型，可选类型：<span className="code">success</span>、<span className="code">error</span>、<span className="code">warning</span>、<span className="code">info</span>、<span className="code">loading</span></td>
                    <td><span className="code">string</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>top</td>
                    <td>弹框距离顶部距离</td>
                    <td><span className="code">number</span></td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>设置类名</td>
                    <td><span className="code">string</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td>
                    <td><span className="code">number</span></td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>自定义图标</td>
                    <td><span className="code">React.ReactNode</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>当前提示的唯一标志</td>
                    <td><span className="code">string</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>message</td>
                    <td>提示内容</td>
                    <td><span className="code">string | React.ReactNode</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>提示内容描述</td>
                    <td><span className="code">string</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否显示关闭按钮</td>
                    <td><span className="code">boolean</span></td>
                    <td><span className="code">true</span></td>
                </tr>
                <tr>
                    <td>closeIcon</td>
                    <td>关闭按钮图标，仅在closable为true时生效</td>
                    <td><span className="code">React.ReactNode</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>onClose</td>
                    <td>关闭按钮回调</td>
                    <td><span className="code">{`() => void`}</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>getContainer</td>
                    <td>配置渲染节点的输出位置</td>
                    <td><span className="code">{`() => HTMLElement`}</span></td>
                    <td><span className="code">{`() => document.body`}</span></td>
                </tr>
            </tbody>
        </table>

        <h3 style={{ margin: '10px 0 0 0' }}>globalNotificationConfigs</h3>
        <table className="stories-table">
            <thead>
                <tr>
                    <th>名称</th>
                    <th style={{ width: 300 }}>描述</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody className="storied-table-tbody">
                <tr>
                    <td>duration</td>
                    <td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td>
                    <td><span className="code">number</span></td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>设置notification从哪个位置弹出，可选值为：<span className="code">topLeft</span>、<span className="code">topRight</span>、<span className="code">bottomLeft</span>、<span className="code">bottomRight</span></td>
                    <td><span className="code">string</span></td>
                    <td><span className="code">topRight</span></td>
                </tr>
                <tr>
                    <td>closeIcon</td>
                    <td>关闭按钮图标，仅在closable为true时生效</td>
                    <td><span className="code">React.ReactNode</span></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>getContainer</td>
                    <td>配置渲染节点的输出位置</td>
                    <td><span className="code">{`() => HTMLElement`}</span></td>
                    <td><span className="code">{`() => document.body`}</span></td>
                </tr>
            </tbody>
        </table>
    </Fragment>
	
);

BasicNotification.storyName = '基本';