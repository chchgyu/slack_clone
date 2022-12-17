import { Link } from 'react-router-dom';
import { Alert, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Logo } from '../components';
import { ROUTER_NAME } from '../constants';

const Signup = () => {
  const onSubmit = () => {
    console.log('onSubmit');
  };

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
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="name" required fullWidth label="닉네임" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" required fullWidth label="이메일 주소" autoComplete="off" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" required fullWidth label="비밀번호" type="password" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                required
                fullWidth
                label="비밀번호 확인"
                type="password"
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
