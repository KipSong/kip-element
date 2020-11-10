import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import UploadList from './UploadList'
import Dragger from './Drager'
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
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
  headers?: { [key: string]: any };
  /**
   * file name 
   */
  name?: string;
  /**
   * 其他参数
   */
  data?: { [key: string]: any };
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
export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    //setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' })
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, { status: 'success', response: resp.data })
      if (onSuccess) {
        onSuccess(resp.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err })
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(file)
      }
    })
  }

  return (
    <div
      className="kip-upload-component"
    >
      <div className="kip-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}>
        {drag ?
          <Dragger onFile={(files) => { uploadFiles(files) }}>
            {children}
          </Dragger> :
          children
        }
        <input
          className="kip-file-input"
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file'
}
export default Upload;