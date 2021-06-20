/// <reference types="react" />
import { MenuProps } from './Menu';
import { IMenuItemProps } from './MenuItem';
import { ISubMenuProps } from './SubMenu';
export declare type IMenuComponent = React.FC<MenuProps> & {
    Item: React.FC<IMenuItemProps>;
    SubMenu: React.FC<ISubMenuProps>;
};
declare const FinalMenu: IMenuComponent;
export default FinalMenu;
