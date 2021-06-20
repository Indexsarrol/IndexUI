import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type keyType = string;
declare type SelectType = (activeKey: keyType) => void;
export interface MenuProps {
    /**
     * 设置菜单默认展开项
     */
    defaultKey: keyType;
    /**
     * 设置菜单类名
     */
    className?: string;
    /**
     * 设置菜单类型，可选值：
     */
    mode?: MenuMode;
    /**
     * 设置菜单样式
     */
    style?: React.CSSProperties;
    /**
     * 设置菜单默认展开项，仅在mode为vertical时生效
     */
    defaultOpenMenus?: string[];
    /**
     * 切换菜单回调函数
     */
    onSelect?: (activeKey: string) => void;
}
export interface IMenuContextProps {
    key: keyType;
    onSelect?: SelectType;
    mode?: MenuMode;
    defaultOpenMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContextProps>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
