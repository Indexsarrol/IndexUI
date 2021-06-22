/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:48:32
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-22 17:20:46
 */

import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import Button from '../Button';
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
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>点击</Button>
      <div style={{ width: 400 }}>
        <Modal
          title="test"
          visible={visible}
          onClose={closeModal}
        >
          1234
        </Modal>
      </div>
    </>
  )
};