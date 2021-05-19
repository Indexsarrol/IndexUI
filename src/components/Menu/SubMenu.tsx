/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-05-18 15:36:18
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-19 11:24:48
 */
import React, { useState, useContext, FunctionComponentElement } from 'react';
import classnames from 'classnames';

import { MenuContext } from './Menu';
import { IMenuItemProps } from './MenuItem';
import Icon from './../Icon/icon';
import Transition from '../Transition/Transition';

export interface ISubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenMenus as string[];
  const isVerticalOpenMenus = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false;
  const [menuOpend, setOpen] = useState(isVerticalOpenMenus)
  let timer: any = null;
  const classes = classnames('idx-menu-item idx-submenu-item', className, {
    'is-active': context.key === index,
    'is-opened': menuOpend,
    'is-vertical': context.mode === 'vertical'
  });


  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        });
      } else {
        console.error('Warning: SubItem组件内只能支持MenuItem组件')
      }
    });
    const subMenuOpenClasses = classnames('idx-submenu', {
        'menu-opened': menuOpend
    })
    return (
      <Transition
        in={menuOpend}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuOpenClasses}>
          { childComponent }
        </ul>
      </Transition>
      
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
      <div className="submenu-title" {...clickEvents} >
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      { renderChildren() }
    </li>
  );
}

SubMenu.displayName = "SubMenu";

export default SubMenu;
