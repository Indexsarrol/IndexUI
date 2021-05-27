/*
 * @Description: Input输入框组件
 * @Author: Indexsarrol
 * @Date: 2021-05-26 13:55:52
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-27 09:51:37
 */

import React from 'react';
import Icon from '../Icon/icon';
import classnames from 'classnames';

const inputRef = React.createRef<HTMLInputElement>();

type InputSize = 'small' | 'default' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'> {
  style?: React.CSSProperties;
  className?: string;
  addonAfterClassName?: string;
  size?: InputSize;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  allowClear?: boolean;
  ref?:any;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    className,
    addonAfterClassName,
    size,
    disabled,
    defaultValue,
    allowClear,
    value,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    ...restProps
  } = props;

  const classes = classnames('idx-input-wrapper', {
    [`idx-input-${size}`]: size,
    'idx-input-disabled': disabled,
    'idx-input-before-addon': addonBefore,
    'idx-input-after-addon': addonAfter
  });

  const innerClasses = classnames('idx-input-inner', className, {
    'idx-input-inner-without-prefix': !prefix,
    'idx-input-inner-without-suffix': !suffix,
    'idx-input-inner-with-clear': allowClear,
  });

  const addonAfterClasses = classnames('idx-input-afteraddon', addonAfterClassName);

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <div className={classes}>
      {
        addonBefore
        &&
        (
          <div className="idx-input-beforeaddon">{addonBefore}</div>
        )
      }
      
      {
        prefix &&
        ( 
          <span className="idx-prefix-icon">
            {prefix}
          </span>
        )
      }
      <input
        ref={inputRef} 
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
        (
          <span className="idx-suffix-icon">
            {suffix}
          </span>
        )
      }
      {
        addonAfter
        &&
        (
          <div className={addonAfterClasses}>
            {addonAfter}
          </div>
        )
      }
      
      
    </div>
  );
}

Input.defaultProps = {
  size: "default",
}

export default Input;
