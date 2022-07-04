import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Joke} from '../Joke/Joke';
import {Colors} from '../../constants/colors';

export const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.background}}>
      <StatusBar barStyle={'light-content'} />
      <Joke />
    </SafeAreaView>
  );
};
