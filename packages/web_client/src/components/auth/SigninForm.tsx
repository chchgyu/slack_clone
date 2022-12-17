import { useFormik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../styles/theme';
import { Button, Input, Text } from '../common';
import S from './styled';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('이메일 형식이 아닙니다!').required('이메일은 필수 입니다!'),
  password: Yup.string().min(5, '5자 이상 입력해주세요').required('비밀번호는 필수 입니다!'),
});

const SigninForm = () => {
  const onSubmit = (data: typeof initialValues) => {
    alert('회원가입 시도');
    console.log('submit!', data);
  };

  const { errors, touched, isSubmitting, getFieldProps, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <Input
          type="email"
          label="이메일"
          placeholder="name@work-email.com"
          {...getFieldProps('email')}
        />
        {errors.email && touched.email && <Text color={colors.red}>{errors.email}</Text>}
      </S.InputWrapper>
      <S.InputWrapper>
        <Input type="password" label="비밀번호" {...getFieldProps('password')} />
        {errors.password && touched.password && <Text color={colors.red}>{errors.password}</Text>}
      </S.InputWrapper>
      <Button type="submit" disabled={isSubmitting}>
        로그인
      </Button>
    </S.Form>
  );
};

export default SigninForm;
