import { ReactNode } from "react";
import {ParagraphStyled} from './Paragraph.styled'
interface ParagraphProps {
  children: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => <ParagraphStyled>{children}</ParagraphStyled>;
