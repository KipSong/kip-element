import React, { MouseEvent, useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import Transition from '../Transition/Transition'


// 分别定义 标题、辅助内容、类型、关闭触发事件、是否显示关闭图标
export interface AlertProps {
  /**
   * 主标题
   */
  title: string,
  /**
   * 副标题
   */
  description?: string,
  /**
   * 类型
   */
  type?: 'default' | 'success' | 'danger' | 'warning',
  /**
   * 关闭钩子
   */
  onClose?: (e: MouseEvent) => void,
  /**
   * 是否显示关闭
   */
  closable?: boolean,
  /**
   * 可自定义class
   */
  className?: string,
  /**
   * 自定义样式
   */
  style?:React.CSSProperties
}

/**
 * Alert 提示
 */
const Alert: React.FC<AlertProps> = (props) => {
  const { title, description, type,style, onClose, closable, className } = props
  const [hide, setHide] = useState(false)
  const closeAlert = (e: MouseEvent) => {
    setHide(true)
    if (onClose) {
      onClose(e)
    }
  }

  const classes = classNames('kip-alert', className, {
    [`kip-alert-${type}`]: type,
  })
  const titleclass = classNames('kip-alert-title', {
    [`kip-alert-bold-title`]: description
  })
  return (
    <>
      <Transition in={!hide} timeout={300} animation='zoom-in-top'>
        <div className={classes} style={style}>
          <span className={titleclass}>{title}</span>
          <span className="kip-alert-descripiton">{description}</span>
          {closable && <div onClick={closeAlert} className='alert-actions'><Icon icon='times'></Icon></div>}
        </div></Transition>
    </>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: false
}

export default Alert