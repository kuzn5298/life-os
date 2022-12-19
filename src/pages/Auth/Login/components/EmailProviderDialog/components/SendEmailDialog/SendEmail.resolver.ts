import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const sendEmailSchema = yup.object().shape({
    email: yup.string().email('email.invalid').required('email.required'),
});

export const sendEmailResolver = yupResolver(sendEmailSchema);
