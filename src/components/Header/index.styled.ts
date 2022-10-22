import styled from "styled-components";
import { isWeekend } from "../../helpers";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-color: ${({ theme }) => theme.border};
  border-bottom-width: 0.5px;
  border-bottom-style: solid;

  margin-bottom: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 768px) {
    width: 95%;
  }

  max-width: 650px;

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Logo = styled.img.attrs({
  src: `${process.env.PUBLIC_URL + (isWeekend ? 'homestuck-heardle-fanmusic.png' : 'homestuck-heardle.png')}`,
  title: 'Homestuck Heardle',
  alt: 'Homestuck Heardle'
})`
  width: 50%;
  padding: 2%;
  -webkit-touch-callout: none;
  user-select: none;
`;
