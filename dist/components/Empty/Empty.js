/*
 * @Description:
 * @Author: Indexsarrol
 * @Date: 2021-06-09 17:44:29
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-10 09:01:37
 */
import React from 'react';
var Empty = function (props) {
    var description = props.description, imageStyle = props.imageStyle, image = props.image;
    return (React.createElement("div", { className: "idx-empty" },
        !image
            ?
                React.createElement("img", { style: imageStyle, className: "idx-empty-img", src: 'https://cdn.jsdelivr.net/gh/Indexsarrol/image/blogs/empty.svg', alt: "empty" })
            :
                image,
        React.createElement("p", { className: "idx-empty-description" }, description || '暂无数据')));
};
export default Empty;
