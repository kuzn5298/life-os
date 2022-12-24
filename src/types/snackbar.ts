import { EnqueueSnackbar, SnackbarKey as NotistackKey } from 'notistack';
import { SnackbarVariantEnum } from 'constpack';

export type SnackbarRef = {
    enqueueSnackbar: EnqueueSnackbar;
    closeSnackbar: (key?: NotistackKey) => void;
};

export type SnackbarKey = string | number;

export type SnackbarOptions = {
    variant: SnackbarVariantEnum;
};

export type PushSnackbar = (message: string, options?: SnackbarOptions) => SnackbarKey | undefined;
export type CloseSnackbar = (key?: SnackbarKey) => void;
