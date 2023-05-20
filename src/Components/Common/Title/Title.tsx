import React from 'react';

import Styles from './Title.module.scss';

interface TitleProps {
    className?: string;
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ className=Styles.Title, children }) => {
    return <h1 className={className}>{children}</h1>;
};

export default Title;