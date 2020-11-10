import React from 'react';
declare type selectCallBack = (index: number) => void;
declare type tabsType = 'card' | 'line';
export interface TabsProps {
    /**
     * 默认选中下标
     */
    defaultIndex?: number;
    /**
     * 可扩展className
     */
    className?: string;
    /**
     * tabs 类型
     */
    type?: tabsType;
    /**
     * 选中回掉
     */
    onSelect?: selectCallBack;
}
interface ITableContext {
    index: number;
    onSelect?: selectCallBack;
}
export declare const TabContext: React.Context<ITableContext>;
/**
 * Tabs 标签页
 */
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
