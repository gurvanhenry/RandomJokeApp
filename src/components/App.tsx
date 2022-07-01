import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

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
      <View style={{flexDirection: 'column', height: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginVertical: 20,
            marginHorizontal: 10,
          }}>
          <Question />
          <Answer />
        </View>
        <View>
          <NextJokeButton onPress={() => console.log('next joke!')} />
        </View>
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
