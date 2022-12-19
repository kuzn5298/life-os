import React from 'react';
import styled from 'styled-components';
import { Paper as MUIPaper } from '@mui/material';

const Paper = styled((p) => <MUIPaper elevation={0} {...p} />)`
    padding: ${({ theme }) => theme.spacing(2)};
`;

export default Paper;
