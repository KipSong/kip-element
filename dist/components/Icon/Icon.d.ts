import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    /**
     * 主题颜色
     */
    theme?: ThemeProps;
}
/**
 * Icon 图标 集成react-fontwesome
 */
declare const Icon: React.FC<IconProps>;
export default Icon;
