import React from "react";

import { GuessType } from "../../types/guess";

import * as Styled from "./index.styled";

interface Props {
  guess: GuessType;
  isCorrect: boolean | undefined;
  active: boolean;
}

export function Guess({ guess, isCorrect, active }: Props) {
  const { song, artistColor, rightAlbum, tagColor } = guess;
  const [track, setTrack] = React.useState<string>("");
  const [artist, setArtist] = React.useState<string[]>([]);
  const [album, setAlbum] = React.useState<string>("");

  React.useEffect(() => {
    if (song) {
      setTrack(song.name);
      setArtist(song.artist);
      setAlbum(song.albumName);
    } else {
      setTrack("");
    }
  }, [guess]);

  return (
    <Styled.Container active={active} isCorrect={isCorrect}>
      <Styled.Text isCorrect={isCorrect}>{track}</Styled.Text>
      <Styled.MultiContainer color={artistColor}>
        {artist.map((artist) => (
          <Styled.ColumnText key={artist}>{artist}</Styled.ColumnText>
        ))}
      </Styled.MultiContainer>
      <Styled.Text isCorrect={rightAlbum}>{album}</Styled.Text> 
      <Styled.MultiContainer color={tagColor}>
        {song?.tags.map((tag) => (
          <Styled.ColumnText key={tag}>{tag}</Styled.ColumnText>
        ))}
      </Styled.MultiContainer>
    </Styled.Container>
  );
}
