import styled, { css } from "styled-components";
import { Colors } from "../Colors";
export type ButtonType =
  | "primary"
  | "secondary"
  | "danger"
  | "outlinePrimary"
  | "outlineSecondary";
export type ButtonSize = "large" | "small" | "normal";

export interface ButtonStylesProps {
  btnType: ButtonType;
  fullWidth: boolean;
  size: ButtonSize;
  rounded: boolean;
}

export const ButtonStyles = {
  primary: {
    default: css`
      border: none;
      background: ${Colors.primary};
      color: #ffffff;
    `,
    hover: css`
      border: none;
    `,
    disabled: css``,
  },
  secondary: {
    default: css`
      border: none;
      background: ${Colors.secondary};
      color: #ffffff;
    `,
    hover: css``,
    disabled: css``,
  },
  danger: {
    default: css`
      border: none;
      background: ${Colors.danger};
      color: #ffffff;
    `,
    hover: css``,
    disabled: css``,
  },
  outlinePrimary: {
    default: css`
      background: inherit;
      border: 1px solid ${Colors.primary};
      color: ${Colors.primary};
    `,
    hover: css``,
    disabled: css``,
  },
  outlineSecondary: {
    default: css`
      background: inherit;
      border: 1px solid ${Colors.primary};
      color: ${Colors.primary};
    `,
    hover: css``,
    disabled: css``,
  },
} as {
  [key in ButtonType]: {
    default: any;
    hover: any;
    disabled: any;
  };
};

export const ButtonSizes = {
  large: css`
    height: 40px;
    font-size: 16px;
    line-height: 24px;
  `,
  small: css``,
  normal: css`
    height: 36px;
    font-size: 14px;
    line-height: 20px;
  `,
} as { [key in ButtonSize]: any };

export const ButtonContainer = styled.button<ButtonStylesProps>`
  width: ${({ fullWidth }) => (!fullWidth ? "fit-content" : "100%")};
  padding: 0 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  border-radius: ${({ rounded }) => (!rounded ? "4px" : "100%")};
  ${({ size }) => ButtonSizes[size]};
  ${({ btnType }) => ButtonStyles[btnType].default};
  &:disabled {
    ${({ btnType }) => ButtonStyles[btnType].disabled};
  }
  &:hover {
    ${({ btnType }) => ButtonStyles[btnType].hover};
  }
`;
