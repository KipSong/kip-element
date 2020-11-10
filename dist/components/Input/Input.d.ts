import React, { ReactElement, InputHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
    append?: string | ReactElement;
}
/**
 * Input 输入框
 */
export declare const Input: React.FC<InputProps>;
export default Input;
