import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {NextJokeButton} from './components/NextJokeButton';
import {useJoke} from './hooks/useJoke';

export const Joke = () => {
  const {joke, getNewJoke} = useJoke();

  useEffect(() => {
    getNewJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
