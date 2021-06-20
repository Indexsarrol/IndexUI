/*
 * @Description: 开关Switch组件
 * @Author: Indexsarrol
 * @Date: 2021-06-02 10:49:51
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-09 11:34:56
 */
import React from 'react';
import RcSwitch from 'rc-switch';
import classnames from 'classnames';
var Switch = function (props) {
    var size = props.size, style = props.style, className = props.className, checked = props.checked, defaultChecked = props.defaultChecked, disabled = props.disabled, checkedText = props.checkedText, unCheckedText = props.unCheckedText, onChange = props.onChange, onClick = props.onClick;
    var classes = classnames('idx-switch-wrapper', className, {
        'idx-switch-small': size === 'small',
        'idx-switch-large': size === 'large',
    });
    return (React.createElement(RcSwitch, { style: style, checked: checked, className: classes, defaultChecked: defaultChecked, onChange: onChange, onClick: onClick, disabled: disabled, checkedChildren: checkedText, unCheckedChildren: unCheckedText }));
};
Switch.defaultProps = {
    size: 'default'
};
export default Switch;
