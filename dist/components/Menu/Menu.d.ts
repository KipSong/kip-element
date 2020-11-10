import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type selectCallBack = (selectedIndex: string) => void;
export interface MenuProps {
    /**
     * 菜单类型
     */
    mode?: MenuMode;
    /**
     * 默认选中值
     */
    defaultIndex?: string;
    /**
     * 可扩展className类
     */
    className?: string;
    defaultOpenSubMenus?: string[];
    /**
     * 可扩展样式
     */
    style?: React.CSSProperties;
    /**
     * 选中回掉
     */
    onSelect?: (selectedIndex: string) => void;
}
interface IMenuContext {
    index: string;
    onSelect?: selectCallBack;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * Menu 导航菜单
 */
declare const Menu: React.FC<MenuProps>;
export default Menu;
