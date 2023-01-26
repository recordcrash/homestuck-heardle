import styled from "styled-components";

export const ResultTitle = styled.h1`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Tries = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  font-weight: 300;
  margin-top: 0;
`;

export const WikiLink = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  color: white;
  font-weight: 300;
  margin-top: 0;
  a {   
    color: white;   
  }

  a:active {
      color: white;
  }

  a[tabindex]:focus {
      color:white;
  }
`;

export const SongTitle = styled.h3`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  font-weight: 300;
  margin-top: 0;
`;

export const TimeToNext = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  font-weight: 300;
`;
