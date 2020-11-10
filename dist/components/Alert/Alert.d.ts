import React, { MouseEvent } from 'react';
export interface AlertProps {
    /**
     * 主标题
     */
    title: string;
    /**
     * 副标题
     */
    description?: string;
    /**
     * 类型
     */
    type?: 'default' | 'success' | 'danger' | 'warning';
    /**
     * 关闭钩子
     */
    onClose?: (e: MouseEvent) => void;
    /**
     * 是否显示关闭
     */
    closable?: boolean;
    /**
     * 可自定义class
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: React.CSSProperties;
}
/**
 * Alert 提示
 */
declare const Alert: React.FC<AlertProps>;
export default Alert;
