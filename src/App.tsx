import React from 'react';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';

const COLORS = {
  background: '#ffbe0b',
  question: '#692DBD',
  answer: '#35175f',
  button: '#ff006e',
  buttonPressed: '#cc0058',
  buttonText: '#ffffff',
};

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.background}}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          paddingBottom: 40,
        }}>
        <Question />
        <Answer />
        <NextJokeButton onPress={() => console.log('next joke!')} />
      </View>
    </SafeAreaView>
  );
};

const Question = () => {
  const text = 'Comment appelle-t-on la mère du phoque ?';
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

const Answer = () => {
  const text = 'Mother phoquer';
  return (
    <Text
      style={{
        textAlign: 'center',
        fontSize: 15,
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
      })}
      onPress={onPress}>
      <Text style={{color: COLORS.buttonText}}>Next joke 🃏</Text>
    </Pressable>
  );
};

export default App;
