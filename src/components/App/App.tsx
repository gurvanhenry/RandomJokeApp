import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from '../../constants/colors';
import {Joke} from '../../features/Joke/Joke';

export const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.background}}>
      <StatusBar barStyle={'light-content'} />
      <Joke />
    </SafeAreaView>
  );
};
