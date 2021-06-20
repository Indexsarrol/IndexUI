import * as React from 'react';
export interface ITabPaneProps {
    key: string;
    tab: string | React.ReactNode;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}
declare const TabPane: React.FC<ITabPaneProps>;
export default TabPane;
