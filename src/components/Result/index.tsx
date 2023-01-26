import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setUTCHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );

  
  // Incredible hack just to avoid regenerating the song list for this lupoCani requested feature
  // TODO: when I do have to regenerate the song list, do this right by just... passing the directory...
  const baseTrackLink = "https://hsmusic.wiki/track/"
  // using the wiki's title javascript regex parsing (thanks Niklink)
  // this WILL break if there is a funny trackname-2 like with Light, so good luck
  /*  track_name = re.split(' ', track_name)
      track_name = "-".join(track_name)
      track_name = re.sub('&', 'and', track_name)
      track_name = re.sub('[^a-zA-Z0-9\-]', '', track_name)
      track_name = re.sub('-{2,}', '-', track_name)
      track_name = re.sub('^-+|-+$', '', track_name).lower() */
  let normalizedTrackName;
  // UGGGHGHHHGHGH
  if (todaysSolution.name === "Three in the Morning (RJ's I Can Barely Sleep In This Casino Remix)") {
    normalizedTrackName = "three-in-the-morning-rj"
  } else if (todaysSolution.name === "Light") {
    if (todaysSolution.artist[0] === "Erik Scheele") {
      normalizedTrackName = "light-vol5"
    } else if (todaysSolution.artist[0] === "Clark Powell") {
      normalizedTrackName = "light-medium"
    }
  } else if (todaysSolution.name === "~~SIDE 1~~") {
    if (todaysSolution.albumName === "coloUrs and mayhem: Universe B") {
      normalizedTrackName = "side-1-universe-b"
    } else if (todaysSolution.albumName === "coloUrs and mayhem: Universe A") {
      normalizedTrackName = "side-1-universe-a"
    }
  } else if (todaysSolution.name === "~~SIDE 2~~") {
    if (todaysSolution.albumName === "coloUrs and mayhem: Universe B") {
      normalizedTrackName = "side-2-universe-b"
    } else if (todaysSolution.albumName === "coloUrs and mayhem: Universe A") {
      normalizedTrackName = "side-2-universe-a"
    }
  } else if (todaysSolution.name === "~~ADDITIONAL MAYHEM~~") {
    if (todaysSolution.albumName === "coloUrs and mayhem: Universe B") {
      normalizedTrackName = "additional-mayhem-universe-b"
    }
    else if (todaysSolution.albumName === "coloUrs and mayhem: Universe A") {
      normalizedTrackName = "additional-mayhem-universe-a"
    }
    // I got tired, I'll just... ignore the other 30 possibilities
  } else {
    normalizedTrackName = todaysSolution.name.split(' ').join('-').replace('&', 'and').replace(/[^a-zA-Z0-9\-]/g, '').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
  }

  const trackWikiLink = baseTrackLink + normalizedTrackName;

  const textForTry = ["Wow!", "Super!", "Congrats!", "Nice!"];

  const copyResult = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, false, false));
  }, [guesses]);

  const copyResultNoEmbed = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, true, false));
  }, [guesses]);

  const copyResultNoLinks = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, true, true));
  }, [guesses]);

  if (didGuess) {

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is: {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.WikiLink> 
          <a href={trackWikiLink}>See it in the HS Music Wiki</a>
        </Styled.WikiLink>
        <Styled.Tries>
          You guessed it in {currentTry} {currentTry === 1 ? 'try' : 'tries'}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy results
        </Button>
        <Button onClick={copyResultNoEmbed} variant="darkgreen">
          Copy results (no Discord embed)
        </Button>
        <Button onClick={copyResultNoLinks} variant="darkgreen">
          Copy results (no links)
        </Button>
        <Styled.TimeToNext>
          Remember to come back in {hoursToNextDay}{" "} hours!
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Unfortunately, that&apos;s wrong</Styled.ResultTitle>
        <Styled.SongTitle>
          Today&apos;s song is {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy results
        </Button>
        <Button onClick={copyResultNoEmbed} variant="darkgreen">
          Copy results (no Discord embed)
        </Button>
        <Button onClick={copyResultNoLinks} variant="darkgreen">
          Copy results (no links)
        </Button>
        <Styled.TimeToNext>
          Try again in {hoursToNextDay}{" "} hours, or ask your Time player
        </Styled.TimeToNext>
      </>
    );
  }
}
