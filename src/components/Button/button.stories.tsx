/*
 * @Description: 
 * @Author: Indexsarrol
 * @Date: 2021-06-08 15:42:44
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-24 11:31:27
 */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from './Button';

/**
 * Primary UI component for user interaction
 */
import '../../styles/index.scss';
export default {
  title: 'Button',
  component: Button
} as Meta;

const defaultStyle = {
	marginRight: 10
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const ButtonType = () => (
	<>
		<Button 
			onClick={action('clicked')} 
			style={defaultStyle}
		>
			default
		</Button>

		<Button
			btnType="primary" 
			onClick={action('clicked')} 
			style={defaultStyle}
		>
			primary
		</Button>

		<Button
			btnType="link" 
			onClick={action('clicked')} 
			style={defaultStyle}
			href="https://www.baidu.com"
		>
			link
		</Button>

		<Button
			btnType="dashed" 
			onClick={action('clicked')} 
			style={defaultStyle}
		>
			dashed
		</Button>

		<Button
			btnType="danger" 
			onClick={action('clicked')} 
			style={defaultStyle}
		>
			danger
		</Button>

		<Button
			btnType="warning" 
			onClick={action('clicked')} 
			style={defaultStyle}
		>
			warning
		</Button>
		
	</>
);
ButtonType.storyName = '按钮类型'


export const ButtonSize = () => (
	<>
		<div>
			<p>large</p>
			<Button
				size="large"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				default
			</Button>

			<Button
				size="large"
				btnType="primary" 
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				primary
			</Button>

			<Button
				btnType="link" 
				size="large"
				onClick={action('clicked')} 
				style={defaultStyle}
				href="https://www.baidu.com"
			>
				link
			</Button>

			<Button
				btnType="dashed" 
				size="large"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				dashed
			</Button>

			<Button
				btnType="danger"
				size="large" 
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				danger
			</Button>

			<Button
				btnType="warning" 
				size="large"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				warning
			</Button>
		</div>

		<div>
			<p style={{ marginTop: 20 }}>small</p>
			<Button
				size="small"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				default
			</Button>

			<Button
				size="small"
				btnType="primary" 
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				primary
			</Button>

			<Button
				btnType="link" 
				size="small"
				onClick={action('clicked')} 
				style={defaultStyle}
				href="https://www.baidu.com"
			>
				link
			</Button>

			<Button
				btnType="dashed" 
				size="small"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				dashed
			</Button>

			<Button
				btnType="danger"
				size="small" 
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				danger
			</Button>

			<Button
				btnType="warning" 
				size="small"
				onClick={action('clicked')} 
				style={defaultStyle}
			>
				warning
			</Button>
		</div>
		
	</>
);

ButtonSize.storyName = '按钮尺寸'

export const ButtonDisabled = () => {
	return (
		<>
			<div>
				<Button 
					onClick={action('clicked')} 
					style={defaultStyle}
				>
					default
				</Button>
				<Button 
					onClick={action('clicked')} 
					disabled
					style={defaultStyle}
				>
					default(disabled)
				</Button>
			</div>
			<div style={{ marginTop: 10 }}>
				<Button
					btnType="dashed" 
					onClick={action('clicked')} 
					style={defaultStyle}
				>
					dashed
				</Button>
				<Button
					btnType="dashed" 
					disabled
					onClick={action('clicked')} 
					style={defaultStyle}
				>
					dashed(disabled)
				</Button>

				
			</div>
			<div style={{ marginTop: 10 }}>
				<Button
				btnType="link" 
				onClick={action('clicked')} 
				style={defaultStyle}
				href="https://www.baidu.com"
			>
				link
			</Button>

				<Button
					btnType="link" 
					disabled
					style={defaultStyle}
					href="https://www.baidu.com"
				>
					link
				</Button>
			</div>
		</>
		
	)
}

ButtonDisabled.storyName = '按钮不可用'

export const ButtonLoading = () => (
	<>
		<Button 
			onClick={action('clicked')} 
			style={defaultStyle}
			loading
		>
			default
		</Button>

		<Button
			btnType="primary" 
			onClick={action('clicked')} 
			style={defaultStyle}
			loading
		>
			primary
		</Button>

		<Button
			btnType="dashed" 
			onClick={action('clicked')} 
			style={defaultStyle}
			loading
		>
			dashed
		</Button>

		<Button
			btnType="danger" 
			onClick={action('clicked')} 
			style={defaultStyle}
			loading
		>
			danger
		</Button>

		<Button
			btnType="warning" 
			onClick={action('clicked')} 
			style={defaultStyle}
			loading
		>
			warning
		</Button>
		
	</>
);
ButtonLoading.storyName = '加载中'