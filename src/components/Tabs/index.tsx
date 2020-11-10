import { FC } from 'react'
import Tabs, { TabsProps } from './Tabs'
import TabsItem, { TabsItemProps } from './TabsItem'

export type TabsComponent = FC<TabsProps> & {
  Item: FC<TabsItemProps>
}

const TransTabs = Tabs as TabsComponent
TransTabs.Item = TabsItem

export default TransTabs