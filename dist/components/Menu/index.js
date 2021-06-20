import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
var FinalMenu = Menu;
FinalMenu.Item = MenuItem;
FinalMenu.SubMenu = SubMenu;
export default FinalMenu;
