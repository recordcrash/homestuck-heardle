import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const PopUp = styled.div`
  width: 90%;
  max-width: 500px;
  @media (max-width: 768px) {
    width: 80%;
    max-height: 70vh;
    overflow-y: scroll;
  }
  padding: 20px;

  background-color: ${({ theme }) => theme.background100};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 0;
  }
`;

export const Spacer = styled.div`
  width: 70%;
  height: 0.2px;

  margin: 20px 0;

  background-color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

export const Section = styled.div`
  width: 100%;
  a {
    color: ${({ theme }) => theme.text};
  }
  .red {
    color: red;
  }
  .yellow {
    color: yellow;
  }
  .green {
    color: green;
  }
`;

export const ShortSection = styled.div`
  width: 100%;
  overflow-y: scroll;
  max-height: 300px;
  @media (max-width: 768px) {
    max-height: 100px;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .red {
    color: red;
  }
  .yellow {
    color: yellow;
  }
  .green {
    color: green;
  }
`;

export const Contact = styled.p`
  a {
    color: ${({ theme }) => theme.text};
  }
  margin-top: 5%;

  font-size: 0.9rem;
  opacity: 0.5;
`;
