import { useContext } from 'react';
import { SnackbarContext } from 'contexts';
import { CloseSnackbar, PushSnackbar } from 'types';

export interface UseSnackbar {
    pushSnackbar: PushSnackbar;
    closeSnackbar: CloseSnackbar;
}

export const useSnackbar = (): UseSnackbar => useContext(SnackbarContext);
