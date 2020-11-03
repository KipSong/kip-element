import React, { ReactElement, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 大小
   */
  size?: 'lg' | 'sm';
  /**
   * icon图标
   */
  icon?: IconProp;
  /**
   * 前缀
   */
  prepend?: string | ReactElement;
  /**
   * 后缀
   */
  append?: string | ReactElement
}

/**
 * Input 输入框
 */
export const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const className = classNames('kip-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-prepend': !!prepend,
    'input-group-append': !!append
  })

  return (
    <div className={className} style={style}>
      {prepend && <div className='kip-input-group-prepend'>{prepend}</div>}
      {icon && <div className='icon-wrapper'><Icon title={`title-${icon}`} icon={icon}></Icon></div>}
      <input className='kip-input-inner' disabled={disabled} {...restProps} />
      {append && <div className='kip-input-group-append'>{append}</div>}
    </div>
  )
}

export default Input