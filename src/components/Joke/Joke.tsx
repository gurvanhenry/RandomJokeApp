import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {useJoke} from './hooks/useJoke';

const REFRESH_ICON = require('../../assets/refresh.png');

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
