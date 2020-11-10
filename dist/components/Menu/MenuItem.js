import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index // 父组件Index匹配子组件Index 选中
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index); // 组件之间传值
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
