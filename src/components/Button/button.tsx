import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link'


export type ButtonShape = 'circle' | 'round'

interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  shape?: ButtonShape,
  children: React.ReactNode,
  href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

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
        {children ? children : '按钮'}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {btnType === 'link' && href}
        {children ? children : '按钮'}
      </button>
    )
  }

}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  shape:'circle'
}

export default Button