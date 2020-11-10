import React from 'react';
export interface SubMenuProps {
    /**
     * 选中下标
     */
    index?: string;
    /**
     * 菜单名称
     */
    title: string;
    /**
     * 可扩展className
     */
    className?: string;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
