import {Pressable, TextInput, View} from 'react-native';

import { Alert } from 'react-native';
import {LAYOUT_HORIZONTAL_PADDING} from '../utils';
import React from 'react';
import Text from '../shared/Text';
import {theme} from '../theme';

const CheckDiseases = () => {
  return (
    <View
      style={{
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: theme.primary,
        }}>
        Check Parkinson's Diseases 
      </Text>
      <TextInput></TextInput>
      {/* <Pressable onPress={Alert.alert("Your are affected by Parkinson's Diseases")}></Pressable> */}
    </View>
  );
};

export default CheckDiseases;
