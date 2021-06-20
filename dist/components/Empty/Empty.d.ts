import React from 'react';
export interface IEmptyProps {
    description?: string;
    imageStyle?: React.CSSProperties;
    image?: string | React.ReactNode;
}
declare const Empty: React.FC<IEmptyProps>;
export default Empty;
