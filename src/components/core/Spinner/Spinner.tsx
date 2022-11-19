import React from 'react';
import clsx from 'clsx';
import { SpinnerIcon } from 'components';

import SpinnerContainer from './Spinner.styled';

interface SpinnerProps {
    fullScreen?: boolean;
    fullContainer?: boolean;
    size?: 'small' | 'medium' | 'large' | 'inherit';
}

const Spinner: React.FC<SpinnerProps> = ({
    fullScreen = false,
    fullContainer = false,
    size = 'inherit',
}) => (
    <SpinnerContainer className={clsx({ fullScreen, fullContainer })}>
        <SpinnerIcon className={clsx('spinner', size)} />
    </SpinnerContainer>
);

export default Spinner;
