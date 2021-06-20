import React from 'react';
export declare type TabsType = 'line' | 'card';
export declare type TabPosition = 'top' | 'right' | 'bottom' | 'left';
export interface ITabsProps {
    defaultKey: string;
    className?: string;
    style?: React.CSSProperties;
    type?: TabsType;
    tabPosition?: TabPosition;
    tabBarExtraContent?: React.ReactNode;
    onChange: (key: string) => void;
}
declare const Tabs: React.FC<ITabsProps>;
export default Tabs;
