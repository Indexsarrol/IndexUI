import Tabs, { ITabsProps } from './Tabs';
import TabPane, { ITabPaneProps } from './TabPane';

export type ITabsComponent = React.FC<ITabsProps> & {
    TabPane: React.FC<ITabPaneProps>,
}

const FinalTabs = Tabs as ITabsComponent;
FinalTabs.TabPane = TabPane;

export default FinalTabs;