import { ReactNode } from "react";
import { HeaderContainer } from "./Header.styled";

interface HeaderProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4;
}

export const Header = ({ children, level = 1 }: HeaderProps) => (
  <HeaderContainer as={`h${level}`}>{children}</HeaderContainer>
);
