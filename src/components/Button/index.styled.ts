import styled from "styled-components";
import { theme } from "../../constants";

export const Button = styled.button<{ variant?: keyof typeof theme }>`
  background-color: ${({ theme, variant }) =>
    variant ? theme[variant] : theme.background100};

  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.text};
  font-family: "Homestuck", serif;
  text-transform: uppercase;
  font-smooth: never;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  margin-bottom: 1rem;

  width: max-content;
  padding: 12.5px 20px;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;

export const MaxWidthButton = styled.button<{ variant?: keyof typeof theme }>`
  background-color: ${({ theme, variant }) =>
    variant ? theme[variant] : theme.background100};

  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.text};
  font-family: "Homestuck", serif;
  text-transform: uppercase;
  font-smooth: never;
  text-rendering: optimizeLegibility;
  font-size: 1rem;

  width: 100%;
  padding: 12.5px 20px;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;