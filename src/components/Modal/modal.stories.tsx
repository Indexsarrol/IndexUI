/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:48:32
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-23 18:05:35
 */

import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import Button from '../Button';
import message from '../Message';
import { Meta } from '@storybook/react';

import '../../styles/index.scss';
export default {
  title: 'Modal',
  component: Modal
} as Meta;

export const BasicModal = () => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false)
  }
  const handleOk = () => {
    message.open({title: '点击了确定！', type: 'info'})
  }
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>点击</Button>
      <div style={{ width: 400 }}>
        <Modal
          title="全局控制器"
          visible={visible}
          onOk={handleOk}
          onClose={closeModal}
        >
          <Button>1234</Button>
        </Modal>
      </div>
    </>
  )
};

BasicModal.storyName = '基本'