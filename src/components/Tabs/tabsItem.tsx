import React, { useContext } from 'react'
import classNames from 'classnames'
import { TabContext } from './Tabs'

export interface TabsItem {
  /**
   * 选项卡头显示文字
   */
  label: React.ReactNode,
  /**
   * 对应 defaultIndex
   */
  index?: number;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  className?: string;

  children?: React.ReactNode
}

const TabsItem: React.FC<TabsItem> = (props) => {
  const { label, disabled, className, index } = props
  const context = useContext(TabContext)
  const classes = classNames('kip-tabs-item', className, {
    'is-active': index === context.index,
    'is-disabled': disabled
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'number') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} onClick={handleClick}>
      {label}
    </li>
  )
}

TabsItem.displayName = 'TabsItem'
export default TabsItem