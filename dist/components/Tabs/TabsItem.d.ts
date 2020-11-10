import React from 'react';
export interface TabsItemProps {
    /**
     * 选项卡头显示文字
     */
    label: React.ReactNode;
    /**
     * 对应 defaultIndex
     */
    index?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const TabsItem: React.FC<TabsItemProps>;
export default TabsItem;
