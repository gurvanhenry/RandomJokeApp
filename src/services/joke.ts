import {Joke, JokeAPI} from '../types';

const BlaguesAPI = require('blagues-api');
const blagues = new BlaguesAPI(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTM3MjAwNjczNDUyODUxMjAwIiwibGltaXQiOjEwMCwia2V5IjoiMUxwTTlWbTBMeU1hMjlHU3Z6ZFNiTVdFSHJadWFGN1hsdzBFYldhZ2hOTjgxMmU4WVIiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNy0wMVQxNToyMzozOCswMDowMCIsImlhdCI6MTY1NjY4OTAxOH0.BzRUYieJwUQ-JYKExpxh_96s93ULo8Axwqt2YYMAdkY',
);

export async function getJoke(): Promise<Joke> {
  const receivedJoke = (await blagues.random()) as JokeAPI;
  const joke = {
    id: receivedJoke.id + '',
    type: receivedJoke.type,
    question: receivedJoke.joke,
    answer: receivedJoke.answer,
  };
  return joke;
}
