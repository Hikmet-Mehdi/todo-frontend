import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStylesProps, ButtonContainer } from "./Button.styled";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<ButtonStylesProps> {
  text: string;
  icon?: ReactNode;
}

export const Button = ({
  text,
  icon,
  size = "normal",
  btnType = "primary",
  fullWidth = false,
  rounded = false,
  ...props
}: ButtonProps) => (
  <ButtonContainer
    size={size}
    btnType={btnType}
    fullWidth={fullWidth}
    rounded={rounded}
    {...props}
  >
    {icon && icon} <span>{text}</span>
  </ButtonContainer>
);
