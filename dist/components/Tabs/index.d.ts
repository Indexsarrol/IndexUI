/// <reference types="react" />
import { ITabsProps } from './Tabs';
import { ITabPaneProps } from './TabPane';
export declare type ITabsComponent = React.FC<ITabsProps> & {
    TabPane: React.FC<ITabPaneProps>;
};
declare const FinalTabs: ITabsComponent;
export default FinalTabs;
