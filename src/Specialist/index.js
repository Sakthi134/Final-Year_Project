import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

import Space from '../shared/Space';
import VideoPlayer from 'react-native-video-controls';

export const gradientColors = [
  'rgba(0,0,0,0.0)',
  'rgba(0,0,0,0)',
  'rgba(0,0,0,0.47)',
  'rgba(0,0,0,0.76)',
];

const Specialist = ({navigation}) => {
  return (
    <View>
      <Space size={18} />
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          color: 'black',
        }}>
        About Parkinson's Disease
      </Text>

      <Space size={18} />
      <View style={styles.videoContainer}>
        <VideoPlayer
          showOnStart={false}
          onBack={() => navigation.pop()}
          source={require('./../../assets/Videos/PARKINSON.mp4')}
          style={styles.backgroundVideo}
        />
      </View>

      <Space size={50} />
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Parkinson's Disease Treatment -- Mayo Clinic
      </Text>
      <Space size={18} />

      <View style={styles.videoContainer}>
        <VideoPlayer
          showOnStart={false}
          onBack={() => navigation.pop()}
          paused={true}
          source={require('./../../assets/Videos/videoplayback.mp4')}
          style={styles.backgroundVideo}
        />
      </View>

      <Space size={5} />
      <Text
        style={{
          fontSize: 12,
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 14,
          paddingLeft: 20,
          paddingRight: 15,
        }}>
        {'                 '}Parkinson's disease can't be cured, but your care
        team will work with you to help you manage your condition. Your health
        care provider will tailor your treatment to your individual needs. Your
        care team has expertise in treating Parkinson's disease and other
        movement disorders with the latest therapies, including medications and
        deep brain stimulation.Mayo Clinic's campuses in Arizona and Minnesota
        are home to early-onset Parkinson's clinics that offer specialized
        diagnosis and treatment for young adults with Parkinson's.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  videoContainer: {
    height: 190,
    width: Dimensions.get('window').width,

    backgroundColor: 'red',
  },

  parkinsonVideo: {
    height: 250,
  },
});

export default Specialist;
