/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:48:32
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-24 10:58:20
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
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setVisible(false)
  }
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000)
  }
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>点击</Button>
      <div style={{ width: 400 }}>
        <Modal
          title="全局控制器"
          visible={visible}
          onOk={handleOk}
          confirmLoading={loading}
          onClose={closeModal}
        >
          <Button>1234</Button>
        </Modal>
      </div>
    </>
  )
};

BasicModal.storyName = '基本'