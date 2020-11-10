import React from 'react';
export declare type ButtonSize = 'sm' | 'medium' | 'lg';
export declare type ButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link';
export declare type ButtonShape = 'circle' | 'round';
interface BaseButtonProps {
    /**
      * 设置按钮类型
      */
    btnType?: ButtonType;
    /**
    * 设置按钮大小
    */
    size?: ButtonSize;
    /**
    * 设置按钮形状
    */
    shape?: ButtonShape;
    /**
     * 按钮失效状态
     */
    disabled?: boolean;
    /**
    *  点击跳转的地址，指定此属性 button 的行为和 a 链接一致
    */
    href?: string;
    /**
    * 可支持自己样式
    */
    className?: string;
    /**
     * 支持原生button所有属性
     */
    any?: null;
}
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button按钮
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
