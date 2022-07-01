import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Joke} from '../types';
import {getJoke} from '../services/joke';

const COLORS = {
  background: '#ffbe0b',
  question: '#692DBD',
  answer: '#35175f',
  button: '#ff006e',
  buttonPressed: '#cc0058',
  buttonText: '#ffffff',
};

const DEFAULT_JOKE = {
  id: '',
  type: '',
  question: '...',
  answer: '...',
};

const App = () => {
  const [joke, setJoke] = useState<Joke>(DEFAULT_JOKE);

  useEffect(() => {
    getNewJoke();
  }, []);

  async function getNewJoke() {
    const newJoke = await getJoke();
    setJoke(newJoke);
  }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.background}}>
      <StatusBar barStyle={'light-content'} />
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
    </SafeAreaView>
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
        color: COLORS.question,
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
        color: COLORS.answer,
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
        backgroundColor: pressed ? COLORS.buttonPressed : COLORS.button,
        borderRadius: 10,
        padding: 20,
        marginBottom: 50,
        alignSelf: 'center',
      })}
      onPress={onPress}>
      <Image
        style={{height: 50, width: 50}}
        source={require('../assets/refresh.png')}
      />
    </Pressable>
  );
};

export default App;
