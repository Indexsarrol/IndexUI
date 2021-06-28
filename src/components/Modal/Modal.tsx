/*
 * @Description: 对话框组件
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:45:17
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-28 18:02:51
 */

import React, { Fragment, useEffect } from 'react';
import classnames from 'classnames';
import Button, { IButtonProps, ButtonType } from '../Button/Button';
import Icon from '../Icon';
import Transition from '../Transition';
import ReactDOM from 'react-dom';

// const suffix = 'idx-modal';

export interface IModalProps {
	title: string;
	content?: string | React.ReactNode;
	visible: boolean;
	width?: string | number;
	top?: number;
	/**是否支持键盘ESC关闭 */
	keyboard?: boolean;
	/** 是否显示遮罩 */
	mask?: boolean;
	/** 点击蒙层是否允许关闭 */
	maskClosable?: boolean;
	/**遮罩样式 */
	maskStyle?: React.CSSProperties;
	suffix?: string;
	closable?: boolean;
	closeIcon?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
	style?: React.CSSProperties;
	footer?: React.ReactNode;
	okButtonProps?: IButtonProps;
	cancelButtonProps?: IButtonProps;
	cancelText?: string | React.ReactNode;
	okText?: string | React.ReactNode;
	okType?: ButtonType;
	confirmLoading?: boolean;
	confirm?: (args: confirmProps) => void;
	success?: (args: confirmProps) => void;
	onOk?: () => void;
	onClose?: () => void;
	[key: string]: any
}

export interface confirmProps extends IModalProps {
	content?: string | React.ReactNode;
	name?: string;
	destroy?: () => void;
}


// 遮罩层
const renderMask = (props: IModalProps): React.ReactNode => {
	const {
		mask,
		maskClosable,
		maskStyle,
		visible,
		suffix,
		onClose
	} = props;
	const modalMaskClasses = classnames(`${suffix}-mask`);
	const closeMask = () => {
		maskClosable && onClose && onClose();
	}
	return (
		<>
			{
				mask &&
				<Transition in={visible} timeout={300} animation="fade">
					<div style={maskStyle} onClick={() => closeMask()} className={modalMaskClasses}></div>
				</Transition>
			}
		</>
	);
}

// 底部footer
const renderFooter = (props: IModalProps): React.ReactNode => {
	const {
		footer,
		cancelText,
		okText,
		okButtonProps,
		okType,
		suffix,
		cancelButtonProps,
		confirmLoading,
		onClose,
		onOk
	} = props;
	return (
		<>
			{
				footer
				?
				footer
				:
				<div className={`${suffix}-footer`}>
					<Button {...cancelButtonProps} onClick={() => onClose && onClose()}>{cancelText}</Button>
					<Button loading={confirmLoading} {...okButtonProps} btnType={okType} onClick={() => onOk && onOk()}>{okText}</Button>
				</div>
			}
		</>
	);
}
const confirmIcons = (suffix: string) => {
	return {
		'success': <Icon className={`${suffix}-icon`} icon="check-circle" size="2x" theme="success" />,
		'error': <Icon className={`${suffix}-icon`} icon="times-circle" size="2x" theme="danger" />,
		'info': <Icon className={`${suffix}-icon`} icon="info-circle" size="2x" theme="primary" />,
		'warning': <Icon className={`${suffix}-icon`} icon="info-circle" size="2x" theme="warning" />,
		'confirm': <Icon className={`${suffix}-icon`} icon="question-circle" size="2x" theme="warning" />
	}
	
};

const renderContent = (props: IModalProps): React.ReactNode => {
	const {
		top,
		title,
		content,
		visible,
		closable,
		width,
		suffix,
		name,
		closeIcon,
		onClose
	} = props;
	console.log(visible);
	return (
		<div>
			<div className={`${suffix}-root`}>
				{renderMask(props)}
				<Transition in={visible} timeout={300} animation="zoom-in-center">
					<div className={`${suffix}-wrapper`} style={{ width, top }}>
						<div className={`${suffix}-content`}>
							{
								title &&
								<div className={`${suffix}-header`}>
									<span className={`${suffix}-title`}>{title}</span>
									{
										closable &&
										<span className={`${suffix}-close`} onClick={() => onClose && onClose()}>
											{closeIcon || <Icon icon="times" />}
										</span>
									}
								</div>
							}
							<div className={`${suffix}-body`}>
								{
									suffix === 'idx-modal'
									?
									props.children
									:
									<div className={`${suffix}-body-wrapper`}>
										<div className={`${suffix}-container`}>
											{ confirmIcons(suffix as string)[name] }
											<div className={`${suffix}-title`}>{ title }</div>
											<div className={`${suffix}-body-content`}>{content}</div>
										</div>
									</div>
								}
							</div>
							{renderFooter(props)}
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
}

const Modal: any = (props: IModalProps) => {
	const { visible, onClose, keyboard } = props;
	useEffect(() => {
		if (keyboard) {
			window.addEventListener('keyup', function (e) {
				if (visible && e.keyCode === 27) onClose && onClose();
			});
			return () => {
				window.removeEventListener('keyup', () => { })
			}
		}
	})
	return (
		ReactDOM.createPortal(renderContent(props), document.body)
	);
}


const HOCModal = (Component: React.FC<IModalProps>) => {
	//剔除出visible，footer，closable，使其不可配，赋予永久默认值
	return ({
		visible,
		footer,
		closable = false,
		okText = '知道了',
		okType = 'primary',
		onOk = () => { },
		onClose = () => { },
		maskClosable = false,
		content = 'Basic body',
		name,
		destroy,
		...props
	}: confirmProps) => {
		// 修改onOk方法传入关闭Modal方法destroy();
		const onOk_1 = () => {
			onOk();
			destroy && destroy();
		}
		// 修改onCancel方法传入关闭Modal方法destroy();
		const onCancel_1 = () => {
			onClose();
			destroy && destroy();
		}
		const Footer = () => {
			return (
				<div className={`idx-modal-confirm-footer`}>
					{
						name === 'confirm'
						?
						<>
							<Button onClick={onCancel_1}>取消</Button>
							<Button onClick={onOk_1}  btnType={okType}>确定</Button>
						</>
						:
						<Button onClick={onOk_1} btnType="primary">知道了</Button>
	
					}
				</div>
			)
		}
		return (
				<Component
					okText={okText}
					closable={false}
					maskClosable={maskClosable}
					onOk={onOk_1}
					suffix="idx-modal-confirm"
					width={416}
					name={name}
					footer={Footer()}
					onClose={onCancel_1}
					content={content}
					visible
					{...props}
				/>
			
		)
	}
}

['confirm', 'info', 'success', 'error', 'warning'].forEach(item => {
	Modal[item] = (props: any) => {
		let div = document.createElement('div');
		// document.body.appendChild(div);
		const FunModal = HOCModal(Modal);
		let currentConfig = Object.assign({visible: true}, props);
		const destroy = () => {
			const unmountResult = ReactDOM.unmountComponentAtNode(div);
			if (unmountResult && div.parentNode) {
				div.parentNode.removeChild(div);
			}
		}
		const render = (config: JSX.IntrinsicAttributes & confirmProps) => {
			ReactDOM.render(<FunModal destroy={destroy} name={item} {...config} />, div);
		}
		const update = (newConfig: any) => {
			currentConfig = Object.assign({}, currentConfig, newConfig);
			render(currentConfig);
		}
		render(currentConfig);
		return {
			destroy: destroy,
			update: update
		}
	}
});


Modal.defaultProps = {
	width: 600,
	keyboard: true,
	closable: true,
	mask: true,
	maskClosable: true,
	suffix: 'idx-modal',
	cancelText: '取消',
	okText: '确定',
	okType: 'primary'
}

export default Modal;