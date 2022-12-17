import { FC, ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppLayout;
