/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-05-18 15:36:18
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-18 17:40:37
 */
import React, { useState, useContext, FunctionComponentElement } from 'react';
import classnames from 'classnames';

import { MenuContext } from './Menu';
import { IMenuItemProps } from './MenuItem';

export interface ISubMenuProps {
  index?: number;
  title: string;
  className?: string;
}


const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const [menuOpend, setOpen] = useState(false)
  const context = useContext(MenuContext);
  let timer: any = null;
  const classes = classnames('idx-menu-item idx-submenu-item', className, {
    'is-active': context.key === index,
  });


  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return childElement;
      } else {
        console.error('Warning: SubItem组件内只能支持MenuItem组件')
      }
    });
    const subMenuOpenClasses = classnames('idx-submenu', {
        'menu-opened': menuOpend
    })
    return (
      <ul className={subMenuOpenClasses}>
        { childComponent }
      </ul>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpend);
  }

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  }

  const clickEvents = context.mode === "vertical" ? {
    onClick: handleClick
  } : {};

  const hoverEvents = context.mode === "horizontal" ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
  } : {}

  return (
    <li className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents} >{title}</div>
      { renderChildren() }
    </li>
  );
}

SubMenu.displayName = "SubMenu";

export default SubMenu;
