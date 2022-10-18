import React from "react";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function CreditsPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>CHANGELOG</h1>
        <Styled.Section>
          <p>2022/10/18 - Share buttons are now sane instead of forcing you to embed when posting on Discord.</p>
          <p>2022/08/29 - Updated dependencies to fix bug. Uphauled code so something may be broken (check the Discord and tell me if it breaks).</p>
          <p>2022/05/07 - Revamped the entire game, it now gives you feedback based on artists, albums and art tags you got right, to bring you in the right direction. Removed skip button.</p>
          <p>2022/05/02 - Release, hard mode (fanmusic and obscure albums) will be released when stats are gathered.</p>
        </Styled.Section>
        <h1>CREDITS</h1>
        <Styled.Section>
          <p>Made by Makin, Niklink, and the <a href="https://discord.gg/homestuck">Homestuck Discord</a>.</p>
          <p>Song metadata parsed from the <a href="https://hsmusic.wiki/">HS Music Wiki</a>.</p>
          <p>Inspiration by <a href="https://homestuck-heardle.glitch.me/">the first Homestuck Heardle</a>.</p>
          <p>Heardle clone template by sarvarghese and Shizerq.</p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Play
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
