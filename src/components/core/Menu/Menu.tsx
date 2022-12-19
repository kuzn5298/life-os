import React from 'react';
import styled from 'styled-components';
import { Menu as MUIMenu, MenuProps } from '@mui/material';

const CustomMenu: React.FC<MenuProps> = ({ ...props }) => (
    <MUIMenu
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
);

const Menu = styled(CustomMenu)`
    .MuiPaper-root {
        border-radius: ${({ theme }) => theme.spacing(2)};
        margin-top: ${({ theme }) => theme.spacing(1)};
    }

    .MuiMenu-list {
        padding: ${({ theme }) => theme.spacing(0.5, 0)};
    }
`;

export default Menu;
