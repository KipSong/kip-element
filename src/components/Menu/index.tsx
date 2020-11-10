import { FC } from 'react'
import Menu, { MenuProps } from './Menu'
import SubMenu, { SubMenuProps } from './SubMenu'
import MenuItem, { MenuItemProps } from './MenuItem'

export type ImenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as ImenuComponent
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu