import styled from '@emotion/styled';
import Text from '../common/Text';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  padding: 48px 40px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const LeftCol = styled.div`
  text-align: center;
`;

const CenterCol = styled.div`
  text-align: center;
`;

const RightCol = styled.div`
  text-align: right;
`;

const Logo = styled.img`
  width: 135px;
  height: 35px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LinkText = styled(Text)`
  cursor: pointer;
  transition: 250ms;

  &:hover {
    text-decoration: underline;
    filter: brightness(70%);
  }
`;

const PageWapper = styled.div`
  max-width: 400px;
  width: 80%;
  padding: 32px 0;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 36px;
`;

export default {
  Container,
  Header,
  LeftCol,
  CenterCol,
  RightCol,
  Logo,
  LinkWrapper,
  LinkText,
  PageWapper,
  FooterLinkWrapper,
};
