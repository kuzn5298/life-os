import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const emailLinkVerificationSchema = yup.object().shape({
    email: yup.string().email('email.invalid').required('email.required'),
});

export const emailLinkVerificationResolver = yupResolver(emailLinkVerificationSchema);
