/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 09:41:42
 * @LastEditTime: 2021-05-18 17:32:46
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\components\Menu\Menu.tsx
 */
import React, { useState, createContext } from 'react';
import { IMenuItemProps } from './MenuItem';
import classnames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type keyType = number;
type SelectType = (activeKey: keyType) => void;

interface MenuProps {
    defaultKey: keyType;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (activeKey: number) => void
}
export interface IMenuContextProps {
    key: keyType;
    onSelect?: SelectType;
    mode?: MenuMode;
};

export const MenuContext = createContext<IMenuContextProps>({ key: 0 });

const Menu: React.FC<MenuProps> = (props) => {
    const { 
        defaultKey, 
        className, 
        mode, 
        style, 
        children,
        onSelect
    } = props;
    const [ currentKey, setCurrentKey ] = useState(defaultKey);
    const handleClick = (key: keyType) => {
        setCurrentKey(key);
        if (onSelect) {
            onSelect(key)
        }
    }
    const transferContext: IMenuContextProps = {
        key: currentKey ? currentKey : 0,
        onSelect: handleClick,
        mode: mode
    }
    const classNames = classnames('idx-menu', className, {
        'idx-menu-vertical': mode === 'vertical',
        'idx-menu-horizontal': mode !== 'vertical',
    });

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
            // childElement.type.displayName
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index
                });
            } else {
                console.error('Menu组件的子组件只能为MenuItem组件');
            }
        })
    }

    return (
        <ul className={classNames} style={style}>
            <MenuContext.Provider value={transferContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
}


Menu.defaultProps = {
    mode: 'horizontal',
    defaultKey: 0
}

export default Menu;