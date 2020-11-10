import React from 'react';
export interface MenuItemProps {
    /**
     * 下标
     */
    index?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 可扩展className
     */
    className?: string;
    /**
     * 可扩展样式
     */
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
