import { FC } from 'react';
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    /**
     * 请求地址
     */
    action: string;
    /**
     * 默认数据
     */
    defaultFileList?: UploadFile[];
    /**
     * 上传之前钩子
     */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /**
     * 进度条
     */
    onProgress?: (percentage: number, file: File) => void;
    /**
     * 成功钩子
     */
    onSuccess?: (data: any, file: File) => void;
    /**
    * 失败钩子
    */
    onError?: (err: any, file: File) => void;
    /**
     * 更改钩子
     */
    onChange?: (file: File) => void;
    /**
     * 移除钩子
     */
    onRemove?: (file: UploadFile) => void;
    /**
     * 请求头设置
     */
    headers?: {
        [key: string]: any;
    };
    /**
     * file name
     */
    name?: string;
    /**
     * 其他参数
     */
    data?: {
        [key: string]: any;
    };
    /**
     * 是否携带token
     */
    withCredentials?: boolean;
    /**
     * 接受的资源类型
     */
    accept?: string;
    /**
     * 是否可上传多数据
     */
    multiple?: boolean;
    /**
     * 是否可拖拽
     */
    drag?: boolean;
}
/**
 * Upload 上传文件
 */
export declare const Upload: FC<UploadProps>;
export default Upload;
