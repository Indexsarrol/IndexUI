/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 09:41:42
 * @LastEditTime: 2021-04-27 16:31:52
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\components\Menu\Menu.tsx
 */
import React, { useState, createContext } from 'react';
import classnames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type keyType = number;
type SelectType = (activeKey: keyType) => void;
interface MenuProps {
    defaultKey: keyType;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectType
}
export interface IMenuContextProps {
    key: keyType;
    onSelect?: SelectType
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
        onSelect: handleClick
    }
    const classNames = classnames('idx-menu', className, {
        'idx-menu-vertical': mode === 'vertical'
    });

    return (
        <ul className={classNames} style={style}>
            <MenuContext.Provider value={transferContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    );
}


Menu.defaultProps = {
    mode: 'horizontal',
    defaultKey: 0
}

export default Menu;