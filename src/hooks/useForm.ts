import { useCallback } from 'react';
import {
    UseFormReturn as UseFormHookReturn,
    useForm as useFormHook,
    UseFormProps,
    FieldValues,
    FieldPath,
    RegisterOptions,
    UseFormRegisterReturn,
    RefCallBack,
} from 'react-hook-form';

type UseMuiFormRegister<TFieldValues extends FieldValues> = <
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
    name: TFieldName,
    options?: RegisterOptions<TFieldValues, TFieldName>
) => Omit<UseFormRegisterReturn, 'ref'> & { inputRef: RefCallBack };

type UseFormReturn<TFieldValues extends FieldValues, TContext> = UseFormHookReturn<
    TFieldValues,
    TContext
> & {
    muiRegister: UseMuiFormRegister<TFieldValues>;
};

export const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = unknown>(
    props?: UseFormProps<TFieldValues, TContext>
): UseFormReturn<TFieldValues, TContext> => {
    const { register, ...otherProps } = useFormHook(props);
    const muiRegister: UseMuiFormRegister<TFieldValues> = useCallback(
        (name, options) => {
            const { ref, ...otherRegister } = register(name, options);
            return { ...otherRegister, inputRef: ref };
        },
        [register]
    );
    return { ...otherProps, register, muiRegister };
};
