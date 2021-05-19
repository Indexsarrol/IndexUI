/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 14:29:06
 * @LastEditTime: 2021-05-19 09:30:10
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\components\Menu\MenuItem.tsx
 */
import React, { useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './Menu';

export interface IMenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);
    const prefix = 'idx-menu-item';
    const classNames = classnames(prefix, className, {
        [`${prefix}-disabled`]: disabled,
        [`${prefix}-actived`]: context.key === index
    });
    const handleChange = (): void => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <li 
            className={classNames} 
            style={style}
            onClick={handleChange}
        >
            {children}
        </li>
    );
}

MenuItem.displayName = 'MenuItem';

export default MenuItem;