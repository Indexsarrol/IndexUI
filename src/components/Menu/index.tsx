import Menu, { MenuProps } from './Menu';
import MenuItem, { IMenuItemProps } from './MenuItem';
import SubMenu, { ISubMenuProps } from './SubMenu';


export type IMenuComponent = React.FC<MenuProps> & {
    Item: React.FC<IMenuItemProps>,
    SubMenu: React.FC<ISubMenuProps>
}

const FinalMenu = Menu as IMenuComponent;

FinalMenu.Item = MenuItem;
FinalMenu.SubMenu = SubMenu;

export default FinalMenu;
