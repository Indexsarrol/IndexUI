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
  /**设置输入框样式 */
  style?: React.CSSProperties;
  /**设置输入框类名 */
  className?: string;
  /**设置输入框末尾类名 */
  addonAfterClassName?: string;
  /**设置输入框尺寸 */
  size?: InputSize;
  /**设置输入框是否禁用 */
  disabled?: boolean;
  /**设置输入框默认值 */
  defaultValue?: string;
  /**设置输入框可变value */
  value?: string;
  /**设置输入框是否可清空（功能暂时未开放） */
  allowClear?: boolean;
  /**获取当前输入框ref */
  ref?:any;
  /**带标签的 input，设置前置标签 */
  addonBefore?: string | React.ReactNode;
  /**带标签的 input，设置后置标签 */
  addonAfter?: string | React.ReactNode;
  /**带有前缀图标的 input */
  prefix?: string | React.ReactNode;
  /**带有后缀图标的 input */
  suffix?: string | React.ReactNode;
  /** 输入框内容变化时的回调 */
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
    <div className={classes} style={style}>
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
        className={innerClasses}
        disabled={disabled} 
        {...restProps} 
      />
      {
        allowClear && inputRef.current&&inputRef.current.value.length > 0 &&
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
