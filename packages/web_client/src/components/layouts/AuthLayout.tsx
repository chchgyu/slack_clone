import { FC, ReactNode, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PATH_TO } from '../../constants/router';
import { colors } from '../../styles/theme';
import { Text, Title } from '../common';
import S from './AuthLayout.styled';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const authPageDate = useMemo(() => {
    const isSigninPage = PATH_TO.SIGN_IN === pathname;

    return {
      linkDesc: isSigninPage ? 'Slack을 처음 사용하시나요?' : '이미 회원이신가요?',
      linkText: isSigninPage ? '계정 생성' : '계정 로그인',
      bottomLinkDesc: isSigninPage ? '아직 회원이 아니신가요? ' : '이미 회원이신가요?',
      bottomLinkText: isSigninPage ? '회원가입 하러가기' : '로그인 하러가기',
      title: isSigninPage ? '로그인' : '회원가입',
      onMovoToPage: () => navigate(isSigninPage ? PATH_TO.SIGN_UP : PATH_TO.SIGN_IN),
    };
  }, [navigate, pathname]);

  return (
    <S.Container>
      <S.Header>
        <S.LeftCol />
        <S.CenterCol>
          <S.Logo src="/svgs/slack_logo.svg" alt="logo" />
        </S.CenterCol>
        <S.RightCol>
          <S.LinkWrapper>
            <Text size="sm">{authPageDate.linkDesc}</Text>
            <S.LinkText
              size="sm"
              weight="bold"
              color={colors.blue}
              onClick={authPageDate.onMovoToPage}
            >
              {authPageDate.linkText}
            </S.LinkText>
          </S.LinkWrapper>
        </S.RightCol>
      </S.Header>
      <Title level={1} weight="bold" size="xl">
        {authPageDate.title}
      </Title>
      <S.PageWapper>{children}</S.PageWapper>
      <S.FooterLinkWrapper>
        <Text>{authPageDate.bottomLinkDesc}</Text>
        <S.LinkText size="sm" weight="bold" color={colors.blue} onClick={authPageDate.onMovoToPage}>
          {authPageDate.bottomLinkText}
        </S.LinkText>
      </S.FooterLinkWrapper>
    </S.Container>
  );
};

export default AuthLayout;
