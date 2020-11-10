import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type selectCallBack = (selectedIndex: string) => void

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
  defaultOpenSubMenus?:string[],
  /**
   * 可扩展样式
   */
  style?: React.CSSProperties;
  /**
   * 选中回掉
   */
  onSelect?: (selectedIndex: string) => void
}

interface IMenuContext {
  index: string;
  onSelect?: selectCallBack;
  mode?:MenuMode;
  defaultOpenSubMenus?:string[],
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

/**
 * Menu 导航菜单
 */
const Menu: React.FC<MenuProps> = (props) => {

  const { defaultIndex, className, mode, style, children, onSelect,defaultOpenSubMenus } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('kip-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode:mode,
    defaultOpenSubMenus
  }

  // 判断children是否是MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName==='SubMenu') {
        //  return child  默认使用 child
        return React.cloneElement(childElement, { index:index.toString() })  // 子组件默认传入下标 index
      } else {
        console.error(`warning:Menu has a child which is not a MenuItem component`);
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus:[]
}

export default Menu
