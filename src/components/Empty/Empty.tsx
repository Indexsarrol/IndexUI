/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-09 17:44:29
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-10 09:01:37
 */

import React from 'react';
import defaultSVG from 'https://cdn.jsdelivr.net/gh/Indexsarrol/image/blogs/empty.svg';

export interface IEmptyProps {
	description?: string;
	imageStyle?: React.CSSProperties;
	image?: string | React.ReactNode;
}

const Empty: React.FC<IEmptyProps> = (props) => {
	const { description, imageStyle, image } = props;
	return (
		<div className="idx-empty">
			{
				!image
				?
				<img style={imageStyle} className="idx-empty-img" src={'https://cdn.jsdelivr.net/gh/Indexsarrol/image/blogs/empty.svg'} alt="empty" />
				:
				image
			}
			<p className="idx-empty-description">{description || '暂无数据'}</p>
		</div>
	);
}

export default Empty;
