import { ReactNode } from 'react';
import { MainLayoutContainer } from './MainLayout.styled';
interface MainLayoutsProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutsProps) => {
  return <MainLayoutContainer>{children}</MainLayoutContainer>;
};
