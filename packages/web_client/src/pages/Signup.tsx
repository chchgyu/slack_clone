import { LoadingButton } from '@mui/lab';
import { Alert, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { SignupRequestDto } from '@slack_clone/common';
import { KeyboardEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Logo } from '../components';
import { ROUTER_NAME } from '../constants';

const Signup = () => {
  // const { request: login, loading } = useLogin();
  const handleLogin = async (data: SignupRequestDto) => {
    // await login(data.username, data.password);
    console.log(data);
  };

  const { register, setFocus, handleSubmit, watch, getValues } = useForm<SignupRequestDto>();
  const onSubmit = handleSubmit((data) => {
    handleLogin(data);
  });

  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const email = getValues('email');
      const nickname = getValues('nickname');
      const password = getValues('password');
      const confirmPassword = getValues('confirmPassword');

      if (email && nickname && password && confirmPassword) {
        handleLogin({ email, nickname, password });
      }
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
          회원가입
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
                label="닉네임"
                fullWidth
                required
                {...register('nickname', { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호"
                type="password"
                autoComplete="on"
                fullWidth
                required
                {...register('password', { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호 확인"
                type="password"
                autoComplete="on"
                fullWidth
                required
                {...register('confirmPassword', { required: true })}
              />
            </Grid>
          </Grid>
          <Alert sx={{ mt: 3 }} severity="error">
            에러메시지
          </Alert>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              !watch('email') ||
              !watch('nickname') ||
              !watch('password') ||
              !watch('confirmPassword')
            }
          >
            회원가입
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={ROUTER_NAME.LOGIN} style={{ textDecoration: 'none', color: 'blue' }}></Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
