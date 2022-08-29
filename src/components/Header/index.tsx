import React from "react";
import { IoInformationCircleOutline, IoGameControllerOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  openCreditsPopUp: () => void;
}

export function Header({ openInfoPopUp, openCreditsPopUp }: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <IoGameControllerOutline
          onClick={openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />

        <Styled.Logo></Styled.Logo>

        <IoInformationCircleOutline
          onClick={openCreditsPopUp}
          size={30}
          width={30}
          height={30}
        />
      </Styled.Content>
    </Styled.Container>
  );
}
