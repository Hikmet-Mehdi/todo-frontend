import { LabelWrapper, ErrorMessage, LabelText } from './Label.styled';
import { Children } from '../types';

export interface LabelProps {
  hasError?: boolean;
  label?: string;
  errorMessage?: string;
}

export const Label = ({
  children,
  label,
  errorMessage,
  hasError,
}: LabelProps & Children) => {
  return (
    <LabelWrapper>
      {label && <LabelText>{label}</LabelText>}
      {children}
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </LabelWrapper>
  );
};
