/*
 * @Description: 开关Switch组件
 * @Author: Indexsarrol
 * @Date: 2021-06-02 10:49:51
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-02 14:12:36
 */

import React from 'react';
import RcSwitch from 'rc-switch';
import classnames from 'classnames';

export type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void
export type SizeType = 'small' | 'large' | 'default';
export interface SwitchProps {
  size?: SizeType;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  checkedText?: string | React.ReactNode;
  unCheckedText?: string | React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchChangeEventHandler;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    size,
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
