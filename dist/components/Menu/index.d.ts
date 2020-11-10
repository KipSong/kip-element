import { FC } from 'react';
import { MenuProps } from './Menu';
import { SubMenuProps } from './SubMenu';
import { MenuItemProps } from './MenuItem';
export declare type ImenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: ImenuComponent;
export default TransMenu;
