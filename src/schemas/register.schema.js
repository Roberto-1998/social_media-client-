import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  email: Yup.string().email('Invalid email').required('required'),
  password: Yup.string().required('required'),
  location: Yup.string().required('required'),
  occupation: Yup.string().required('required'),
  picture: Yup.string().required('required'),
});
