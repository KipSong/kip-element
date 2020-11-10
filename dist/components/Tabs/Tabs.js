import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var TabContext = createContext({ index: 0 });
/**
 * Tabs 标签页
 */
var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, type = props.type, onSelect = props.onSelect, children = props.children;
    var _a = useState(defaultIndex), activeIndex = _a[0], setActive = _a[1];
    var classes = classNames('kip-tabs', className, {
        'is-card': type === 'card'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: activeIndex ? activeIndex : 0,
        onSelect: handleClick
    };
    var renderContainer = function () {
        var container;
        React.Children.forEach(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'TabsItem' && activeIndex === index) {
                container = React.cloneElement(childElement).props.children;
            }
        });
        return container;
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'TabsItem') {
                return React.cloneElement(childElement, { index: index });
            }
            else {
                console.error("warning:Tabs has a child which is not a TabsItem component");
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes },
            React.createElement(TabContext.Provider, { value: passedContext }, renderChildren())),
        React.createElement("div", null, renderContainer())));
};
Tabs.defaultProps = {
    defaultIndex: 0
};
export default Tabs;
