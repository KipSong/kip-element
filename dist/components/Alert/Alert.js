import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Transition from '../Transition/Transition';
/**
 * Alert 提示
 */
var Alert = function (props) {
    var _a, _b;
    var title = props.title, description = props.description, type = props.type, style = props.style, onClose = props.onClose, closable = props.closable, className = props.className;
    var _c = useState(false), hide = _c[0], setHide = _c[1];
    var closeAlert = function (e) {
        setHide(true);
        if (onClose) {
            onClose(e);
        }
    };
    var classes = classNames('kip-alert', className, (_a = {},
        _a["kip-alert-" + type] = type,
        _a));
    var titleclass = classNames('kip-alert-title', (_b = {},
        _b["kip-alert-bold-title"] = description,
        _b));
    return (React.createElement(React.Fragment, null,
        React.createElement(Transition, { in: !hide, timeout: 300, animation: 'zoom-in-top' },
            React.createElement("div", { className: classes, style: style },
                React.createElement("span", { className: titleclass }, title),
                React.createElement("span", { className: "kip-alert-descripiton" }, description),
                closable && React.createElement("div", { onClick: closeAlert, className: 'alert-actions' },
                    React.createElement(Icon, { icon: 'times' }))))));
};
Alert.defaultProps = {
    type: 'default',
    closable: false
};
export default Alert;
