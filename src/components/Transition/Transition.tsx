/*
 * @Description: 动画组件
 * @Author: Indexsarrol
 * @Date: 2021-05-19 10:51:01
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-06-23 15:34:46
 */

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-center' | 'fade'

interface ITransitionProps extends CSSTransitionProps {
    animation?: AnimationName
}

const Transition: React.FC<ITransitionProps> = (props) => {
    const { classNames, children, animation, ...restProps } = props;
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
}

export default Transition;
