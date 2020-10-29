import React, { MouseEvent, useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
  Default = 'default',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning'
}

// 分别定义 标题、辅助内容、类型、关闭触发事件、是否显示关闭图标
interface AlertProps {
  title: string,
  description?: string,
  type?: string,
  onClose?: void,
  closable?: boolean,
  className?: string,
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, description, type, onClose, closable, className } = props
  const [hide, setHide] = useState(false)
  const closeAlert = (e: MouseEvent) => {
    setHide(true)
  }

  const classes = classNames('kip-alert', className, {
    [`kip-alert-${type}`]: type,
  })
  const titleclass = classNames('kip-alert-title', {
    [`kip-alert-bold-title`]: description
  })
  return (
    <>
      {!hide ? <div className={classes} onClick={closeAlert}>
        <span className={titleclass}>{title}</span>
        <span className="kip-alert-descripiton">{description}</span>
      </div> : null}
    </>
  )
}

Alert.defaultProps = {
  type: AlertType.Default,
  closable: false
}

export default Alert