/*
 * @Description: 开关Switch组件
 * @Author: Indexsarrol
 * @Date: 2021-06-02 10:49:51
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-09 11:34:56
 */

import React from 'react';
import RcSwitch from 'rc-switch';
import classnames from 'classnames';

export type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void
export type SizeType = 'small' | 'large' | 'default';
export interface SwitchProps {
  /**
   * 开关大小，可选值：
   */
  size?: SizeType;
  /**
   * 开关类名
   */
  className?: string;
  /**
   * 指定当前是否选中
   */
  checked?: boolean;
  /**
   * 开关行内样式
   */
  style?: React.CSSProperties;
  /**
   * 开关默认是否选中
   */
  defaultChecked?: boolean;
  /**
   * 开关默认是否禁用
   */
  disabled?: boolean;
  /**
   * 开关选中时提示的文字
   */
  checkedText?: string | React.ReactNode;
  /**
   * 开关关闭时提示的文字
   */
  unCheckedText?: string | React.ReactNode;
  /**
   * 开关切换的回调函数`Function(checked: boolean, event: Event)`
   */
  onChange?: SwitchChangeEventHandler;
  /**
   * 开关点击的回调函数`Function(checked: boolean, event: Event)`
   */
  onClick?: SwitchChangeEventHandler;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    size,
    style,
    className,
    checked,
    defaultChecked,
    disabled,
    checkedText,
    unCheckedText,
    onChange,
    onClick
  } = props;
  const classes = classnames('idx-switch-wrapper', className, {
    'idx-switch-small': size === 'small',
    'idx-switch-large': size === 'large',
  });
  return (
      <RcSwitch
        style={style}
        checked={checked}
        className={classes}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
        checkedChildren={checkedText}
        unCheckedChildren={unCheckedText}
      />
  );
}

Switch.defaultProps = {
  size: 'default'
}

export default Switch;
