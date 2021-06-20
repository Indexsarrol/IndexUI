import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';
interface ITransitionProps extends CSSTransitionProps {
    animation?: AnimationName;
}
declare const Transition: React.FC<ITransitionProps>;
export default Transition;
