import { event } from "react-ga";

import React from "react";
import _ from "lodash";

import { Song } from "./types/song";
import { GuessType } from "./types/guess";

import { todaysSolution } from "./helpers";

import { Header, InfoPopUp, CreditsPopUp, Game, Footer } from "./components";

import * as Styled from "./app.styled";

function App() {
  const initialGuess = {
    song: undefined,
    isCorrect: undefined,
  } as GuessType;

  const [guesses, setGuesses] = React.useState<GuessType[]>(
    Array.from({ length: 5 }).fill(initialGuess) as GuessType[]
  );
  const [currentTry, setCurrentTry] = React.useState<number>(0);
  const [selectedSong, setSelectedSong] = React.useState<Song>();
  const [didGuess, setDidGuess] = React.useState<boolean>(false);

  const firstRun = localStorage.getItem("firstRun") === null;
  let stats = JSON.parse(localStorage.getItem("stats") || "{}");

  React.useEffect(() => {
    if (Array.isArray(stats)) {
      const visitedToday = _.isEqual(
        todaysSolution,
        stats[stats.length - 1].solution
      );

      if (!visitedToday) {
        stats.push({
          solution: todaysSolution,
          currentTry: 0,
          didGuess: 0,
        });
      } else {
        const { currentTry, guesses, didGuess } = stats[stats.length - 1];
        setCurrentTry(currentTry);
        setGuesses(guesses);
        setDidGuess(didGuess);
      }
    } else {
      // initialize stats
      // useEffect below does rest
      stats = [];
      stats.push({
        solution: todaysSolution,
      });
    }
  }, []);

  React.useEffect(() => {
    if (Array.isArray(stats)) {
      stats[stats.length - 1].currentTry = currentTry;
      stats[stats.length - 1].didGuess = didGuess;
      stats[stats.length - 1].guesses = guesses;
    }
  }),
    [guesses, currentTry, didGuess];

  React.useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const [isInfoPopUpOpen, setIsInfoPopUpOpen] =
    React.useState<boolean>(firstRun);

  const [isCreditsPopUpOpen, setIsCreditsPopUpOpen] = 
    React.useState<boolean>(false);

  const openInfoPopUp = React.useCallback(() => {
    setIsInfoPopUpOpen(true);
  }, []);

  const openCreditsPopUp = React.useCallback(() => {
    setIsCreditsPopUpOpen(true);
  }, []);

  const closeCreditsPopUp = React.useCallback(() => {
    setIsCreditsPopUpOpen(false);
  }, []);

  const closeInfoPopUp = React.useCallback(() => {
    if (firstRun) {
      localStorage.setItem("firstRun", "false");
      setIsInfoPopUpOpen(false);
    } else {
      setIsInfoPopUpOpen(false);
    }
  }, [localStorage.getItem("firstRun")]);

  const guess = React.useCallback(() => {
    const isCorrect = selectedSong === todaysSolution;
    const isRightAlbum = selectedSong?.albumName === todaysSolution?.albumName;
    let tagColor = 'red';
    if (selectedSong?.tags.every((tag) => todaysSolution?.tags.includes(tag))) {
      tagColor = 'white';
    } else if (selectedSong?.tags.some((tag) => todaysSolution?.tags.includes(tag))) {
      tagColor = 'yellow';
    }
    const selectedArtists = selectedSong?.artist;
    let artistColor = 'red';
    if (selectedArtists?.every((artist) => todaysSolution?.artist.includes(artist))) {
      console.log('white');
      artistColor = 'white';
    } else if (selectedArtists?.some((artist) => todaysSolution?.artist.includes(artist))) {
      console.log('yellow');
      artistColor = 'yellow';
    }
    
    

    if (!selectedSong) {
      alert("Choose a song");
      return;
    }

    setGuesses((guesses: GuessType[]) => {
      const newGuesses = [...guesses];
      newGuesses[currentTry] = {
        song: selectedSong,
        isCorrect: isCorrect,
        artistColor: artistColor,
        rightAlbum: isRightAlbum,
        tagColor: tagColor,
      };

      return newGuesses;
    });

    setCurrentTry((currentTry) => currentTry + 1);
    setSelectedSong(undefined);

    if (isCorrect) {
      setDidGuess(true);
    }

    event({
      category: "Game",
      action: "Guess",
      label: `${selectedSong.artist} - ${selectedSong.name}`,
      value: isCorrect ? 1 : 0,
    });
  }, [guesses, selectedSong]);

  return (
    <main>
      <Header openInfoPopUp={openInfoPopUp} openCreditsPopUp={openCreditsPopUp} />
      {isInfoPopUpOpen && <InfoPopUp onClose={closeInfoPopUp}/>}
      {isCreditsPopUpOpen && <CreditsPopUp onClose={closeCreditsPopUp} />}
      <Styled.Container>
        <Game
          guesses={guesses}
          didGuess={didGuess}
          todaysSolution={todaysSolution}
          currentTry={currentTry}
          setSelectedSong={setSelectedSong}
          guess={guess}
        />
      </Styled.Container>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
