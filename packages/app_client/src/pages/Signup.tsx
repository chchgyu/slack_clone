import { LoadingButton } from '@mui/lab';
import { Alert, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { SignupRequestDto } from '@slack_clone/common';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import gravatar from 'gravatar';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Logo } from '../components';
import { ROUTER_NAME } from '../constants';
import { useNavigationGuard } from '../hooks';
import { currentUserAtom } from '../store';

const Signup = () => {
  useNavigationGuard({ isAuth: false });

  const timer = useRef<NodeJS.Timeout>();

  const setCurrentUser = useSetRecoilState(currentUserAtom);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEmptyValueValid = ({
    email,
    nickname,
    password,
    confirmPassword,
  }: SignupRequestDto) => {
    if (!email || !nickname || !password || !confirmPassword) {
      setErrorMsg('모든 항목을 입력해주세요');
      return true;
    }

    setErrorMsg(null);
    return false;
  };

  const handlePasswordValid = ({
    password,
    confirmPassword,
  }: Pick<SignupRequestDto, 'password' | 'confirmPassword'>) => {
    if (confirmPassword && (password.length < 6 || confirmPassword.length < 6)) {
      setErrorMsg('비밀번호를 확인하세요.');
      return true;
    }

    if (password !== confirmPassword) {
      setErrorMsg('비밀번호를 확인하세요.');
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

  const handleLogin = async (data: SignupRequestDto) => {
    const { email, nickname, password, confirmPassword } = data;
    if (handleEmptyValueValid(data)) return;
    if (handlePasswordValid({ password, confirmPassword })) return;
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);

      await updateProfile(user, {
        displayName: nickname,
        photoURL: gravatar.url(user.email as string, { protocol: 'https', s: '36px', d: 'retro' }),
      });

      await set(ref(getDatabase(), `/users/${user.uid}`), {
        name: user.displayName,
        avatar: user.photoURL,
      });

      setCurrentUser(user);
    } catch (error) {
      setErrorMsg((error as any).message);
    } finally {
      setLoading(false);
    }
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

      handleLogin({ email, nickname, password, confirmPassword });
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
                autoComplete="off"
                fullWidth
                required
                {...register('nickname', { required: true })}
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
            <Grid item xs={12}>
              <TextField
                label="비밀번호 확인"
                type="password"
                autoComplete="off"
                fullWidth
                required
                {...register('confirmPassword', { required: true })}
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
              <Link to={ROUTER_NAME.LOGIN} style={{ textDecoration: 'none', color: 'blue' }}>
                이미 계정이 있나요? 로그인으로 이동
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
