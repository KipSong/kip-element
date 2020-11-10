var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
/**
 * Button按钮
 */
var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, shape = props.shape, children = props.children, href = props.href, restProps = __rest(props
    //btn, btn-lg, btn-primary
    , ["btnType", "className", "disabled", "size", "shape", "children", "href"]);
    //btn, btn-lg, btn-primary
    var classes = classNames('kip-btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a["btn-" + shape] = shape === 'round',
        _a['disabled'] = (btnType === 'link') && disabled,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children ? children : 'button'));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps),
            btnType === 'link' && href,
            children ? children : 'button'));
    }
};
Button.defaultProps = {
    size: 'medium',
    btnType: 'default',
    shape: 'circle',
    disabled: false
};
export default Button;