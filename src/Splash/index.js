import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

const Splashs = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2500);
  if (!timePassed) {
    return (
      <View style={styles.main}>
        <View style={styles.splash}>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={require('./../../assets/images/360_F_130865338_7WIT7hNIgfC95bht5hXy98JrkwBwRndP.jpg')}></Image>
          </View>
        </View>
      </View>
    );
  }
  navigation.navigate('Login');
  return null;
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    padding: 10,
    marginVertical: 220,
  },

  logo: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Splashs;
