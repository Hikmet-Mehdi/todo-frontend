import { TextareaHTMLAttributes } from 'react';
import { Label, LabelProps } from '../Label';
import { InputFiled } from './TextFields.styled';

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    LabelProps {}

export const Textarea = ({
  label,
  hasError,
  errorMessage,
  ...props
}: TextareaProps) => {
  return (
    <Label label={label} errorMessage={errorMessage} hasError={hasError}>
      <InputFiled as="textarea" {...props} />
    </Label>
  );
};
