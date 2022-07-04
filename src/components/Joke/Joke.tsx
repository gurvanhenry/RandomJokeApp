import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {JokeObject} from './types';
import {getJoke} from './services';
import {Colors} from '../../constants/colors';

const REFRESH_ICON = require('../../assets/refresh.png');

const DEFAULT_JOKE = {
  id: '',
  type: '',
  question: '...',
  answer: '...',
};

export const Joke = () => {
  const [joke, setJoke] = useState<JokeObject>(DEFAULT_JOKE);

  useEffect(() => {
    getNewJoke();
  }, []);

  async function getNewJoke() {
    const newJoke = await getJoke();
    setJoke(newJoke);
  }

  return (
    <View style={{flexDirection: 'column', height: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginVertical: 20,
          marginHorizontal: 10,
        }}>
        <Question text={joke.question} />
        <Answer text={joke.answer} />
      </View>
      <View>
        <NextJokeButton onPress={getNewJoke} />
      </View>
    </View>
  );
};

const Question = ({text}: {text: string}) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontSize: 30,
        paddingHorizontal: 20,
        paddingTop: 40,
        color: Colors.question,
        fontWeight: 'bold',
      }}>
      {text}
    </Text>
  );
};

const Answer = ({text}: {text: string}) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 40,
        color: Colors.answer,
        fontStyle: 'italic',
      }}>
      {text}
    </Text>
  );
};

const NextJokeButton = ({onPress}: {onPress: () => void}) => {
  return (
    <Pressable
      style={({pressed}) => ({
        backgroundColor: pressed ? Colors.buttonPressed : Colors.button,
        borderRadius: 10,
        padding: 20,
        marginBottom: 50,
        alignSelf: 'center',
      })}
      onPress={onPress}>
      <Image style={{height: 50, width: 50}} source={REFRESH_ICON} />
    </Pressable>
  );
};
