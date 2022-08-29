import React from "react";

import { GuessType } from "../../types/guess";
import { Song } from "../../types/song";

import { Button, Guess, Player, Search, Result } from "../";

import * as Styled from "./index.styled";
import { MaxWidthButton } from "../Button/index.styled";

interface Props {
  guesses: GuessType[];
  todaysSolution: any;
  currentTry: number;
  didGuess: boolean;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  guess: () => void;
}

export function Game({
  guesses,
  todaysSolution,
  currentTry,
  didGuess,
  setSelectedSong,
  guess,
}: Props) {
  if (didGuess || currentTry === 6) {
    return (
      <Result
        didGuess={didGuess}
        currentTry={currentTry}
        todaysSolution={todaysSolution}
        guesses={guesses}
      />
    );
  }
  return (
    <>
      {guesses.map((guess: GuessType, index) => (
        <Guess
          key={index}
          guess={guess}
          isCorrect={guess.isCorrect}
          active={index === currentTry}
        />
      ))}
      <Player id={todaysSolution.youtubeId} currentTry={currentTry} />
      <Search currentTry={currentTry} setSelectedSong={setSelectedSong}/>

      <Styled.Buttons>
        <MaxWidthButton variant="green" onClick={guess}>
          Submit
        </MaxWidthButton>
      </Styled.Buttons>
    </>
  );
}
