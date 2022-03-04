import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback, forwardRef, useRef } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var cn = classnames.exports;

var assignRef = function (ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
        ref.current = value;
    }
};

function useMergedRef() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return useCallback(function (node) {
        refs.forEach(function (ref) { return assignRef(ref, node); });
    }, refs);
}

var Button = forwardRef(function (props, innerRef) {
    var _a;
    var children = props.children, className = props.className, addonLeft = props.addonLeft, addonRight = props.addonRight, _b = props.color, color = _b === void 0 ? 'primary' : _b, outline = props.outline, _c = props.size, size = _c === void 0 ? 'medium' : _c, loading = props.loading, disabled = props.disabled, onClick = props.onClick, onMouseLeave = props.onMouseLeave, href = props.href, id = props.id, title = props.title, role = props.role, onBlur = props.onBlur, onFocus = props.onFocus, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, onMouseEnter = props.onMouseEnter, type = props.type;
    var rootClasses = 'relative flex justify-center items-center rounded-md overflow-hidden ripple-hover__container focus:outline-none focus:ring ';
    var colors = {
        primary: 'bg-primary-500 border border-primary-500 text-black ring-offset-1 ring-primary-300',
        secondary: 'bg-dark-500 border text-white border-dark-500 dark:bg-light-500 dark:text-black dark:border-light-500 ring-offset-1 ring-dark-300',
        gray: 'bg-gray-100 border text-black border-gray-100 ring-offset-1 ring-gray-300',
        success: 'bg-success-500 border border-success-500 text-white ring-offset-1 ring-success-500',
        error: 'bg-error-500 border border-error-500 text-white ring-offset-1 ring-error-500',
        ghost: 'bg-transparent color-black',
    };
    var outlineColors = {
        primary: 'bg-white border-primary-500 text-black',
        secondary: 'bg-white border-dark-500 text-black dark:bg-dark-500 dark:text-white dark:border-light-500',
        gray: 'bg-white border-gray-100 text-dark',
        success: 'bg-white border-success text-success',
        danger: 'bg-white border-danger text-danger',
    };
    var sizes = {
        small: 'py-1 px-2',
        medium: 'py-2 px-4',
        large: 'py-4 px-8',
        block: 'w-full h-full',
    };
    var defaultRef = useRef(null);
    var mergedRefs = useMergedRef(innerRef, defaultRef);
    var Tag = href ? 'a' : 'button';
    var classes = cn('button', className, rootClasses, sizes[size], (_a = {},
        _a[' opacity-70 cursor-not-allowed'] = disabled,
        _a[colors[color]] = !outline,
        _a[outlineColors[color]] = outline,
        _a));
    var handleClick = function (event) {
        if (onClick)
            onClick(event);
    };
    var handleMouseEnter = function (event) {
        if (onMouseEnter)
            onMouseEnter(event);
    };
    return (jsxs(Tag, __assign({ ref: mergedRefs, href: href, title: title, role: role, id: id, type: type, className: classes, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: onMouseLeave, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onBlur: onBlur, onFocus: onFocus }, { children: [!loading && addonLeft && (jsx("span", __assign({ className: "z-10 mx-1 mr-2" }, { children: addonLeft }), void 0)), !loading && (jsx("span", __assign({ className: "z-10" }, { children: children }), void 0)), !loading && addonRight && (jsx("span", __assign({ className: "z-10 mx-1 ml-2" }, { children: addonRight }), void 0))] }), void 0));
});

export { Button };
//# sourceMappingURL=index.es.js.map
