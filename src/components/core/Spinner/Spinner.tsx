import React from 'react';
import clsx from 'clsx';

import SpinnerContainer from './Spinner.styled';

type SpinnerProps = {
    fullScreen?: boolean;
    fullContainer?: boolean;
    color?: 'primary' | 'secondary' | 'appContrast' | 'paperContrast' | 'backdropContrast';
    size?: 'small' | 'medium' | 'large';
};

const Spinner: React.FC<SpinnerProps> = ({
    fullScreen = false,
    fullContainer = false,
    color = 'primary',
    size = 'medium',
}) => (
    <SpinnerContainer className={clsx({ fullScreen, fullContainer })}>
        <span className={clsx('loader', size, color)} />
    </SpinnerContainer>
);

export default Spinner;
