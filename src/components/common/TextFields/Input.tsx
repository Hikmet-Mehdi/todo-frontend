import { InputHTMLAttributes, forwardRef, Ref } from 'react';
import { InputFiled } from './TextFields.styled';
import { Label, LabelProps } from '../Label';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    LabelProps {}

export const Input = forwardRef(
  (
    { label, hasError, errorMessage, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Label label={label} hasError={hasError} errorMessage={errorMessage}>
      <InputFiled as="input" ref={ref} {...props} />
    </Label>
  )
);
