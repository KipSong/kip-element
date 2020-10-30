import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'sm' | 'medium' | 'lg'

export type ButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link'

export type ButtonShape = 'circle' | 'round'

interface BaseButtonProps {
  /**
    * 设置按钮类型
    */
  btnType?: ButtonType,
  /**
  * 设置按钮大小
  */
  size?: ButtonSize,
  /**
  * 设置按钮形状
  */
  shape?: ButtonShape,
  /**
   * 按钮失效状态
   */
  disabled?: boolean,

  /**
  *  点击跳转的地址，指定此属性 button 的行为和 a 链接一致
  */
  href?: string
  /**
  * 可支持自己样式
  */
  className?: string,
  /**
   * 支持原生button所有属性
   */
  any?:null
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * Button按钮
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    shape,
    children,
    href,
    ...restProps
  } = props
  //btn, btn-lg, btn-primary
  const classes = classNames('kip-btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape === 'round',
    'disabled': (btnType === 'link') && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children ? children : 'button'}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {btnType === 'link' && href}
        {children ? children : 'button'}
      </button>
    )
  }

}
Button.defaultProps = {
  size: 'medium',
  btnType: 'default',
  shape: 'circle',
  disabled: false
}

export default Button