/*
 * @Description: 对话框组件
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:45:17
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-22 17:24:22
 */

import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import Transition from '../Transition';
import ReactDOM from 'react-dom';

const suffix = 'idx-modal';

export interface IModalProps {
	title: string;
	visible: boolean;
	width?: string | number;
	className?: string;
	children: React.ReactNode;
	style?: React.CSSProperties;
	onClose: () => void;
}

const renderContent = (props: IModalProps): React.ReactNode => {
	const { visible, width, onClose } = props;
	const modalMaskClasses = classnames(`${suffix}-mask`, {
		[`${suffix}-mask-hidden`]: !visible
	});
	return (
		<div>
				<div className={`${suffix}-root`}>
					<div className={modalMaskClasses}></div>
					<div className={`${suffix}-wrapper`} style={{ width, display: visible ? '' : 'none' }}>
						<div className={`${suffix}-content`}>
							<div className={`${suffix}-header`}>
								<span className={`${suffix}-title`}>标题</span>
								<span className={`${suffix}-close`} onClick={() => onClose()}>
									<Icon icon="times" />
								</span>
							</div>
							<div className={`${suffix}-body`}>
								{props.children}
							</div>
							<div className={`${suffix}-footer`}>底部</div>
						</div>
					</div>
				</div>
		</div>
	);
}

const Modal: React.FC<IModalProps> = (props) => {
	return (
		ReactDOM.createPortal(renderContent(props), document.body)
	);
}

Modal.defaultProps = {
	width: 600
}

export default Modal;