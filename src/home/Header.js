import {BORDER_WIDTH, HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING} from '../utils';
import {Image, View} from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import React from 'react';
import Space from '../shared/Space';
import {theme} from '../theme';

const Header = ({navigation}) => (
  <View
    style={{
      height: HEADER_HEIGHT,
      paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
      <Pressable onPress={() => navigation.navigate('Details')}>
      <View
        style={{
          height: 50,
          width: 48,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          overflow: 'hidden',
          borderWidth: BORDER_WIDTH,
          borderColor: theme.border,
        }}
        >
        <Image
          source={require('../../assets/images/img9.png')}
          style={{
            position: 'absolute',
            top: 1,
            height: 50,
            width: 45.5,
            resizeMode: 'cover',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
        <Pressable onPress={() => navigation.navigate('Specialist')}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 99,
            borderWidth: BORDER_WIDTH,
            borderColor: theme.border,
            overflow: 'hidden',
          }}>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: '#FFDFAF',
              top: 1,
              borderRadius: 99,
            }}
          />
          <Image
            source={require('../../assets/images/stethescope.png')}
            style={{
              position: 'absolute',
              height: '85%',
              width: '97%',
              resizeMode: 'cover',
              borderRadius: 99,
              top:2
            }}
          />
        </View>
        </Pressable>
        <Space horizontal size={8} />
        <Pressable onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 99,
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              overflow: 'hidden',
            }}>
            <View
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: '#FFDFAF',
                top: 1,
                borderRadius: 99,
              }}
            />

            <Image
              source={require('../../assets/icons/arrow-left.png')}
              style={{
                position: 'absolute',
                height: '80%',
                width: '80%',
                resizeMode: 'cover',
                borderRadius: 99,
                tintColor: 'black',
                top: 5,
                right: 3,
              }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  </View>
);

export default Header;
