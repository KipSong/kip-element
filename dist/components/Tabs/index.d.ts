import { FC } from 'react';
import { TabsProps } from './Tabs';
import { TabsItemProps } from './TabsItem';
export declare type TabsComponent = FC<TabsProps> & {
    Item: FC<TabsItemProps>;
};
declare const TransTabs: TabsComponent;
export default TransTabs;
