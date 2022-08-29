import React, { CSSProperties } from "react";

import * as Styled from "./index.styled";
import { theme } from "../../constants";

interface Props {
  style?: CSSProperties;
  variant?: keyof typeof theme;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ onClick, style, variant, children }: Props) {
  return (
    <Styled.Button onClick={onClick} variant={variant} style={style}>
      {children}
    </Styled.Button>
  );
}

export function MaxWidthButton({ onClick, style, variant, children }: Props) {
  return (
    <Styled.MaxWidthButton onClick={onClick} variant={variant} style={style}>
      {children}
    </Styled.MaxWidthButton>
  );
}
