import React from "react";
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
          <p>Listen to the intro, then find the correct Homestuck song in the list. This game currently takes songs from the main albums, with a few exceptions like the piano one.</p>
        </Styled.Section>
        <Styled.Section>
          <p>Incorrect attempts unlock more parts of the song, and tell you if you got the artist, album or theme right:</p>
          <ul>
            <li><b>Song:</b> The game ends if you get this right, otherwise it&apos;ll show up <span className="red">red</span>.</li>
            <li><b>Artist:</b> White if you got them all right. If one or more of the contributors are correct, it&apos;ll be <span className="yellow">yellow</span>, <span className="red">red</span> if none did.</li>
            <li><b>Album:</b> White if you got it right, <span className="red">red</span> if you didn&apos;t.</li>
            <li><b>Theme:</b> If one of more of the art tags (characters or locations that appear in the art) of your guess are in the final song, it&apos;ll be <span className="yellow">yellow</span>, white if they&apos;re all in the true song, <span className="red">red</span> if none apply.</li>
          </ul>
        </Styled.Section>
        <Styled.Section>
          <p>Answer in as few tries as possible and share your score!</p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Play
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
