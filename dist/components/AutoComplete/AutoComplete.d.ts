import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/Input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /**
     * 返回结果
     */
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /**
     * 选中回掉
     */
    onSelect?: (item: DataSourceType) => void;
    /**
     * 自定义下拉
     */
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * 自动完成 AutoComplete
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
