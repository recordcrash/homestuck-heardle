import { Song } from '../types/song';
import { easyModeSongs } from './easyModeSongs';
import { hardModeSongs } from './hardModeSongs';
import { isWeekend } from '../helpers/isWeekend';


export let songs: Song[];

if (isWeekend) {
  songs = hardModeSongs;
} else {
  songs = easyModeSongs;
}
