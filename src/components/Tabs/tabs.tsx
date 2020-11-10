import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { TabsItemProps } from './TabsItem'

type selectCallBack = (index: number) => void
type tabsType = 'card' | 'line'

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

export const TabContext = createContext<ITableContext>({ index: 0 })

/**
 * Tabs 标签页
 */
const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultIndex, className, type, onSelect, children } = props
  const [activeIndex, setActive] = useState(defaultIndex)
  const classes = classNames('kip-tabs', className, {
    'is-card': type === 'card'
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: ITableContext = {
    index: activeIndex ? activeIndex : 0,
    onSelect: handleClick
  }

  const renderContainer = () => {
    let container;
    React.Children.forEach(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabsItem' && activeIndex === index) {
        container = React.cloneElement(childElement).props.children
      }
    })
    return container
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabsItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error(`warning:Tabs has a child which is not a TabsItem component`);
      }
    })
  }
  return (
    <>
      <ul className={classes}>
        <TabContext.Provider value={passedContext}>
          {renderChildren()}
        </TabContext.Provider>
      </ul>
      <div>{renderContainer()}</div>
    </>
  )
}
Tabs.defaultProps = {
  defaultIndex: 0
}
export default Tabs