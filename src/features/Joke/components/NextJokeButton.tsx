import React from 'react';
import {Pressable, Image} from 'react-native';
import {Colors} from '../../../constants/colors';

const REFRESH_ICON = require('../../../assets/refresh.png');

export const NextJokeButton = ({onPress}: {onPress: () => void}) => {
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
