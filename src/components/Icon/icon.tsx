/*
 * @Description: 图标组件
 * @Author: Indexsarrol
 * @Date: 2021-05-13 15:02:30
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-21 16:15:46
 */


import React from 'react';
import classnames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

library.add(fas);

export type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {

  const { className, theme, ...restProps } = props;
  const classes = classnames('idx-icon', className, {
    [`icon-${theme}`]: theme
  });

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon;