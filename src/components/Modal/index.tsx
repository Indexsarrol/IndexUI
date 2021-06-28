/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-28 15:30:48
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-28 15:49:38
 */

import Modal, { IModalProps } from './Modal';

export type IModalComponent = React.FC<IModalProps> & {
    success: (configs: IModalProps) => void;
    info: (configs: IModalProps) => void;
    error: (configs: IModalProps) => void;
    warning: (configs: IModalProps) => void;
    confirm: (configs: IModalProps) => void;
}

const FinalModal = Modal as IModalComponent;

export default FinalModal;
