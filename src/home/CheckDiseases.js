import {Pressable, TextInput, View} from 'react-native';

import {Alert} from 'react-native';
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
      <View
        style={{
          marginVertical: 25,
          paddingHorizontal: 17,
          borderRadius: 31,
          borderColor: '#EBEBEB',
          borderWidth: 1,
        }}>
        <TextInput
          placeholder="Enter Voice Frequency"
          style={{fontSize: 15}}
          selectionColor="#686868"></TextInput>
      </View>
      <Pressable
        onPress={() => Alert.alert("Your are affected by Parkinson's Diseases")}
        style={{
          width: '40%',
          borderRadius: 25,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FF1493',
          marginBottom:10,
          marginHorizontal:90
        }}>
          <Text>Check</Text>
        </Pressable>
    </View>
  );
};

export default CheckDiseases;
