/*
 * @Description: Input输入框组件
 * @Author: Indexsarrol
 * @Date: 2021-05-26 13:55:52
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-26 16:47:46
 */

import React from 'react';
import Icon from '../Icon/icon';
import classnames from 'classnames';

const ref = React.createRef<HTMLInputElement>();

type InputSize = 'small' | 'default' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'> {
  style?: React.CSSProperties;
  className?: string;
  size?: InputSize;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  allowClear?: boolean;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    className,
    size,
    disabled,
    defaultValue,
    allowClear,
    value,
    prefix,
    suffix,
    ...restProps
  } = props;

  const classes = classnames('idx-input-wrapper', {
    [`idx-input-${size}`]: size,
    'idx-input-disabled': disabled,
  });

  const innerClasses = classnames('idx-input-inner', className, {
    'idx-input-inner-without-prefix': !prefix,
    'idx-input-inner-without-suffix': !suffix,
    'idx-input-inner-with-clear': allowClear,
  });

  const clearInputValue = () => {
    if (ref.current) {
      ref.current.value = '';
    }
  }

  return (
    <div className={classes}>
      <span className="idx-prefix-icon">
        {prefix}
      </span>
      
      <input
        ref={ref} 
        type="input"
        defaultValue={defaultValue}
        value={value}
        style={style}
        className={innerClasses}
        disabled={disabled} 
        {...restProps} 
      />
      {
        allowClear && value && value.length > 0 &&
        (
          <span className="idx-clear-icon">
            <Icon icon="times-circle" size="sm" onClick={clearInputValue}/>
          </span>
        )
      }
      {
        suffix && 
        <span className="idx-suffix-icon">
          {suffix}
        </span>
      }
      
    </div>
  );
}

Input.defaultProps = {
  size: "default",
}

export default Input;
