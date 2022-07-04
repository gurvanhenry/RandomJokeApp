import {useState} from 'react';

import {JokeObject} from '../types';
import {getJoke} from '../helpers';

const DEFAULT_JOKE = {
  id: '',
  type: '',
  question: '...',
  answer: '...',
};

export const useJoke = () => {
  const [joke, setJoke] = useState<JokeObject>(DEFAULT_JOKE);

  async function getNewJoke() {
    const newJoke = await getJoke();
    setJoke(newJoke);
  }

  return {
    joke,
    getNewJoke,
  };
};
