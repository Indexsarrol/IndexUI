/*
 * @Description: 对话框组件
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:45:17
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-24 10:54:32
 */

import React, { useEffect } from 'react';
import classnames from 'classnames';
import Button, { IButtonProps, ButtonType } from '../Button/Button';
import Draggable from 'react-draggable'; 
import Icon from '../Icon';
import Transition from '../Transition';
import ReactDOM from 'react-dom';

const suffix = 'idx-modal';

export interface IModalProps {
	title: string;
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
	onOk: () => void;
	onClose: () => void;
}


// 遮罩层
const renderMask = (props: IModalProps): React.ReactNode => {
	const {
		mask, 
		maskClosable, 
		maskStyle, 
		visible, 
		onClose
	} = props;
	const modalMaskClasses = classnames(`${suffix}-mask`);
	const closeMask = () => {
		maskClosable && onClose();
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
		cancelButtonProps,
		confirmLoading,
		onClose, 
		onOk 
	} = props;
	return (
		<>
			{
				footer &&
				<div className={`${suffix}-footer`}>
					<Button {...cancelButtonProps} onClick={() => onClose()}>{cancelText}</Button>
					<Button loading={confirmLoading} {...okButtonProps} btnType={okType} onClick={() => onOk()}>{okText}</Button>
				</div>
			}
		</>
	);
}

const renderContent = (props: IModalProps): React.ReactNode => {
	const { 
		top, 
		title, 
		visible,
		closable, 
		width, 
		closeIcon, 
		onClose
	} = props;
	return (
		<div>
			<div className={`${suffix}-root`}>
			  { renderMask(props) }
				<Transition in={visible} timeout={300} animation="zoom-in-center">
					<div className={`${suffix}-wrapper`} style={{ width, top }}>
						<div className={`${suffix}-content`}>
							<div className={`${suffix}-header`}>
								<span className={`${suffix}-title`}>{title}</span>
								{
									closable &&
									<span className={`${suffix}-close`} onClick={() => onClose()}>
										{ closeIcon || <Icon icon="times" /> }
									</span>
								}
							</div>
							<div className={`${suffix}-body`}>
								{props.children}
							</div>
							{ renderFooter(props) }
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
}

const Modal: React.FC<IModalProps> = (props) => {
	const { visible, onClose, keyboard } = props;
	
	useEffect(() => {
		if (keyboard) {
			window.addEventListener('keyup', function(e) {
				if (visible && e.keyCode === 27) onClose();
			});
			return () => {
				window.removeEventListener('keyup', () => {})
			}
		}
	})
	return (
		ReactDOM.createPortal(renderContent(props), document.body)
	);
}

Modal.defaultProps = {
	width: 600,
	keyboard: true,
	closable: true,
	mask: true,
	maskClosable: true,
	footer: true,
	cancelText: '取消',
	okText: '确定',
	okType: 'primary'
}

export default Modal;