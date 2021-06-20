/*
 * @Author: Indexsarrol
 * @Date: 2021-04-27 09:41:42
 * @LastEditTime: 2021-06-09 14:04:56
 * @LastEditors: Indexsarrol
 * @Description: 
 * @FilePath: \index-ui\src\components\Menu\Menu.tsx
 */
import React, { useState, createContext } from 'react';
import { IMenuItemProps } from './MenuItem';
import classnames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type keyType = string;
type SelectType = (activeKey: keyType) => void;

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
	defaultOpenMenus?: string[]
};

export const MenuContext = createContext<IMenuContextProps>({ key: '0' });

const Menu: React.FC<MenuProps> = (props) => {
	const {
		defaultKey,
		className,
		mode,
		style,
		children,
		defaultOpenMenus,
		onSelect
	} = props;
	const [currentKey, setCurrentKey] = useState(defaultKey);
	const handleClick = (key: keyType) => {
		setCurrentKey(key);
		if (onSelect) {
			onSelect(key)
		}
	}
	const transferContext: IMenuContextProps = {
		key: currentKey ? currentKey : '0',
		onSelect: handleClick,
		mode,
		defaultOpenMenus
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
					index: `${index}`
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
	defaultKey: '0',
	defaultOpenMenus: []
}

export default Menu;