/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-22 15:48:32
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-28 16:55:44
 */

import React, { Fragment, useState } from 'react';
import Modal from './Modal';
// import confirm from './Confirm';
import Button from '../Button';
import message from '../Message';
import { Meta } from '@storybook/react';
// const confirm = Modal.confirm;

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

  const confirmDialog = () => {
    Modal.confirm({
      title: '你确定要删除此项吗？',
      content: '删除之后不可恢复！',
      onOk() {
        console.log('确定')
      },
      onClose(){
        console.log('取消')
      }
    })
  }

  const success = () => {
    Modal.success({
      title: '删除成功！',
      content: '删除之后不可恢复！',
      onOk() {
        console.log('确定')
      },
      onClose(){
        console.log('取消')
      }
    })
  }

  const error = () => {
    Modal.error({
      title: '删除失败！',
      content: '请联系管理员',
      onOk() {
        console.log('确定')
      },
      onClose(){
        console.log('取消')
      }
    })
  }

  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: 'some messages...some messages...',
      onOk() {
        console.log('确定')
      },
      onClose(){
        console.log('取消')
      }
    })
  }

  const warning = () => {
    Modal.warning({
      title: '删除后不会恢复',
      content: 'some messages...some messages...',
      onOk() {
        console.log('确定')
      },
      onClose(){
        console.log('取消')
      }
    })
  }

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>点击</Button>
      <Button onClick={() => confirmDialog()}>confirm</Button>
      <Button onClick={() => info()}>info</Button>
      <Button onClick={() => error()}>error</Button>
      <Button onClick={() => warning()}>warning</Button>
      <Button onClick={() => success()}>success</Button>
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