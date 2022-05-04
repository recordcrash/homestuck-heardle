import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>HOW TO PLAY</h1>
        <Styled.Section>
          {/* <IoMusicalNoteOutline size={50} /> */}
          <p>
            Listen to the intro, then find the correct Homestuck song in the list. This game currently takes songs from the first list of albums <a href="sources.txt">here</a>.
          </p>
        </Styled.Section>
        <Styled.Section>
          {/* <IoHelpCircleOutline size={50} /> */}
          <p>Skipped or incorrect attempts unlock more parts of the song.</p>
        </Styled.Section>
        <Styled.Section>
          <p>Answer in as few tries as possible and share your score!</p>
        </Styled.Section>
        <h1>CHANGELOG</h1>
        <Styled.Section>
          <p>2022/05/02 - Release, hard mode (fanmusic and obscure albums) will be released when stats are gathered.</p>
        </Styled.Section>
        <h1>CREDITS</h1>
        <Styled.Section>
          <p>Made by Makin, <a href="https://homestuck.net">Homestuck.net</a> and the <a href="https://discord.gg/homestuck">Homestuck Discord</a>.</p>
          <p>Song metadata parsed from the <a href="https://hsmusic.wiki/">HS Music Wiki</a>.</p>
          <p>Heardle clone template by sarvarghese and Shizerq.</p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Play
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
