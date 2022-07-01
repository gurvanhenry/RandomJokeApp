import {Joke, JokeAPI} from '../types';

import {BLAGUE_API_KEY} from '@env';

const BlaguesAPI = require('blagues-api');
const blagues = new BlaguesAPI(BLAGUE_API_KEY);

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
