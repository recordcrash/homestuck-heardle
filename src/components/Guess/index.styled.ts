import styled from "styled-components";

export const Container = styled.div<{
  active: boolean;
  isCorrect: boolean | undefined;
}>`
  width: 100%;
  height: 60px;

  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-color: ${({ theme, active, isCorrect }) => {
    if (active) {
      return theme.border;
    } else if (isCorrect === false) {
      return theme.red;
    } else {
      return theme.border100;
    }
  }};
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;

  color: ${({ theme }) => theme.text};
`;

export const MultiContainer = styled.div<{
  color: string | undefined;
}>`
  width: 100%;
  height: 80%;

  margin: 2px auto;
  display: flex;
  flex-direction: column;
  scrollbar-color: #999;
  overflow-x: hidden;
  color: ${({color}) => color};
`;

export const ColumnText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  margin: auto;
  padding-bottom: 3px;
  line-height: 1.0;
`;

export const Text = styled.p<{
  isCorrect: boolean | undefined;
}>`
  width: 100%;
  height: max-content;
  text-align: center;

  font-size: 1rem;
  color: ${({ theme, isCorrect} , ) => isCorrect ? theme.text : 'red'};
`;
