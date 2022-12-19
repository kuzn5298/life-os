import styled from 'styled-components';
import { Backdrop as MUIBackdrop } from '@mui/material';

const Backdrop = styled(MUIBackdrop)`
    background-color: ${({ theme }) => theme.palette.background.backdrop};
`;

export default Backdrop;
