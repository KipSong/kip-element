import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

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

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props

  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index  // 父组件Index匹配子组件Index 选中
  })

  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index) // 组件之间传值
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}


MenuItem.displayName = 'MenuItem'
export default MenuItem