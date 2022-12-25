import '../firebase';

import { LoadingButton } from '@mui/lab';
import { Alert, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { LoginRequestDto } from '@slack_clone/common';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Logo } from '../components';
import { ROUTER_NAME } from '../constants';
import { useNavigationGuard } from '../hooks';

const Login = () => {
  useNavigationGuard({ isAuth: false });

  const timer = useRef<NodeJS.Timeout>();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEmptyValueValid = ({ email, password }: LoginRequestDto) => {
    if (!email || !password) {
      setErrorMsg('모든 항목을 입력해주세요');
      return true;
    }

    setErrorMsg(null);
    return false;
  };

  useEffect(() => {
    if (!errorMsg) return;
    timer.current = setTimeout(() => setErrorMsg(null), 3000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [errorMsg]);

  const handleLogin = async (data: LoginRequestDto) => {
    const { email, password } = data;
    if (handleEmptyValueValid(data)) return;
    setLoading(true);

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      setErrorMsg((error as any).message);
    } finally {
      setLoading(false);
    }
  };

  const { register, setFocus, handleSubmit, watch, getValues } = useForm<LoginRequestDto>();
  const onSubmit = handleSubmit((data) => {
    handleLogin(data);
  });

  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const email = getValues('email');
      const password = getValues('password');

      handleLogin({ email, password });
    }
  };

  useEffect(() => {
    setFocus('email', { shouldSelect: true });
  }, [setFocus]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Logo />
        <br />
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={onSubmit} onKeyDown={onKeyDown}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="이메일 주소"
                autoComplete="off"
                fullWidth
                required
                {...register('email', { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호"
                type="password"
                autoComplete="off"
                fullWidth
                required
                {...register('password', { required: true })}
              />
            </Grid>
          </Grid>
          {errorMsg && (
            <Alert sx={{ mt: 3 }} severity="error">
              {errorMsg}
            </Alert>
          )}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            loading={loading}
            disabled={!watch('email') || !watch('password')}
          >
            로그인
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={ROUTER_NAME.SIGNUP} style={{ textDecoration: 'none', color: 'blue' }}>
                계정이 없나요? 회원가입으로 이동
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
