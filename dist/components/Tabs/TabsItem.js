import React, { useContext } from 'react';
import classNames from 'classnames';
import { TabContext } from './Tabs';
var TabsItem = function (props) {
    var label = props.label, disabled = props.disabled, className = props.className, index = props.index;
    var context = useContext(TabContext);
    var classes = classNames('kip-tabs-item', className, {
        'is-active': index === context.index,
        'is-disabled': disabled
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'number') {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, onClick: handleClick }, label));
};
TabsItem.displayName = 'TabsItem';
export default TabsItem;
