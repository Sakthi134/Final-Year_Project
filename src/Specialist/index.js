import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Space from '../shared/Space';
import VideoPlayer from 'react-native-video-controls';

export const gradientColors = [
  'rgba(0,0,0,0.0)',
  'rgba(0,0,0,0)',
  'rgba(0,0,0,0.47)',
  'rgba(0,0,0,0.76)',
];

const Specialist = ({navigation}) => {
  const [about, setAbout] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [tremor, setTremor] = useState(false);
  const [exsersise, setExsersise] = useState(false);
  return (
    <ScrollView>
      <Space size={18} />
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          color: 'red',
        }}>
        About Parkinson's Disease
      </Text>

      <Space size={18} />
      <View style={styles.videoContainer}>
        {!about && (
          <Pressable onPress={() => setAbout(true)}>
            <Image
              style={{height: 200, width: 200, marginLeft: 80}}
              source={require('./../../assets/images/921171.png')}></Image>
          </Pressable>
        )}

        {about && (
          <VideoPlayer
            onBack={() => navigation.pop()}
            paused={true}
            source={require('./../../assets/Videos/PARKINSON.mp4')}
            style={styles.backgroundVideo}
          />
        )}
      </View>
      <Space size={18} />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 20,
          paddingLeft: 20,
          paddingRight: 15,
        }}>
        {'                 '}Parkinson's disease is a brain disorder that causes
        unintended or uncontrollable movements, such as shaking, stiffness, and
        difficulty with balance and coordination.Symptoms usually begin
        gradually and worsen over time. As the disease progresses, people may
        have difficulty walking and talking.
      </Text>

      <Space size={25} />
      <Text
        style={{
          fontSize: 17,
          paddingHorizontal: 20,
          color: 'red',
          fontWeight: 'bold',
        }}>
        Parkinson's Disease Treatment -- Mayo Clinic
      </Text>
      <Space size={18} />

      <View style={styles.videoContainer}>
        {!treatment && (
          <Pressable onPress={() => setTreatment(true)}>
            <Image
              style={{height: 200, width: 200, marginLeft: 80}}
              source={require('./../../assets/images/921171.png')}></Image>
          </Pressable>
        )}

        {treatment && (
          <VideoPlayer
            paused={true}
            onBack={() => navigation.pop()}
            source={require('./../../assets/Videos/videoplayback.mp4')}
            style={styles.backgroundVideo}
          />
        )}
      </View>

      <Space size={18} />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 20,
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
      <Space size={25} />
      <Text
        style={{
          fontSize: 19,
          paddingHorizontal: 20,
          color: 'red',
          fontWeight: 'bold',
        }}>
        Tremor in the case of Parkinson's effect
      </Text>
      <Space size={18} />

      <View style={styles.videoContainer}>
        {!tremor && (
          <Pressable onPress={() => setTremor(true)}>
            <Image
              style={{height: 200, width: 200, marginLeft: 80}}
              source={require('./../../assets/images/921171.png')}></Image>
          </Pressable>
        )}

        {tremor && (
          <VideoPlayer
            paused={true}
            onBack={() => navigation.pop()}
            source={require('./../../assets/Videos/TremorParkinson.mp4')}
            style={styles.backgroundVideo}
          />
        )}
      </View>

      <Space size={18} />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 20,
          paddingLeft: 20,
          paddingRight: 15,
        }}>
        {'                 '}A tremor, or rhythmic shaking, usually begins in a
        limb, often your hand or fingers. You may rub your thumb and forefinger
        back and forth. This is known as a pill-rolling tremor.
      </Text>
      <Space size={25} />
      <Text
        style={{
          fontSize: 19,
          paddingHorizontal: 20,
          color: 'red',
          fontWeight: 'bold',
        }}>
        Exercises for Parkinson's Disease
      </Text>
      <Space size={18} />

      <View style={styles.videoContainer}>
        {!exsersise && (
          <Pressable onPress={() => setExsersise(true)}>
            <Image
              style={{height: 200, width: 200, marginLeft: 80}}
              source={require('./../../assets/images/921171.png')}></Image>
          </Pressable>
        )}

        {exsersise && (
          <VideoPlayer
            paused={true}
            onBack={() => navigation.pop()}
            source={require('./../../assets/Videos/ParkinsonsDiseaseExercisesLegStrength.mp4')}
            style={styles.backgroundVideo}
          />
        )}
      </View>

      <Space size={18} />
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 20,
          paddingLeft: 20,
          paddingRight: 15,
        }}>
        {'                 '}Biking, running, Tai Chi, yoga, Pilates, dance,
        weight training, non-contact boxing, qi gong and more are included — all
        have positive effects on Parkinson's Disease symptoms.
      </Text>
      <Space size={18} />
    </ScrollView>
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

    //backgroundColor: 'red',
  },

  parkinsonVideo: {
    height: 250,
  },
});

export default Specialist;
