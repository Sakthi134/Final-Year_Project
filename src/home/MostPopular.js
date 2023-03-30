import {BORDER_RADIUS, BORDER_WIDTH, LAYOUT_HORIZONTAL_PADDING} from '../utils';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Space from '../shared/Space';
import Text from '../shared/Text';
import {theme} from '../theme';

export const gradientColors = [
  'rgba(0,0,0,0.0)',
  'rgba(0,0,0,0)',
  'rgba(0,0,0,0.47)',
  'rgba(0,0,0,0.76)',
];

const renderIconAndText = (imgPath, text) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Image
      source={imgPath}
      style={{
        height: 20,
        width: 20,
        resizeMode: 'cover',
      }}
    />
    <Text
      style={{
        color: theme.tertiary,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
      }}>
      {text}
    </Text>
  </View>
);

const MostPopular = ({
  navigation,
  setCauses,
  setSymptoms,
  setPrevention,
  setSpecialist,
}) => {
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
        About Parkinson's Diseases
      </Text>

      {/* Causes */}
      <Space size={18} />
      <Pressable
        onLayout={event => setCauses(event.nativeEvent.layout)}
        onPress={() => navigation.navigate('Causes')}>
        <View
          style={{
            height: 222,
            marginBottom: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS + 4,
              overflow: 'hidden',
              padding: 3,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: BORDER_RADIUS,
              }}
              source={require('../../assets/images/images.jpeg')}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              left: 22,
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS,
              justifyContent: 'center',
              paddingHorizontal: 14,
              paddingVertical: 6,
              backgroundColor: '#ffe252',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              Causes
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              right: 22,
              justifyContent: 'center',
              paddingVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderIconAndText(require('../../assets/images/921171.png'))}
          </View>

          <LinearGradient
            colors={gradientColors}
            style={styles.gradientLayer}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 22,
              left: 22,
              right: 22,
            }}></View>
        </View>
      </Pressable>

      {/* Symptoms */}
      <Space size={18} />
      <Pressable
        onLayout={event => setSymptoms(event.nativeEvent.layout)}
        onPress={() => navigation.navigate('Symptoms')}>
        <View
          style={{
            height: 222,
            marginBottom: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS + 4,
              overflow: 'hidden',
              padding: 3,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: BORDER_RADIUS,
              }}
              source={require('../../assets/images/AdobeStock_71913139.webp')}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              left: 22,
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS,
              justifyContent: 'center',
              paddingHorizontal: 14,
              paddingVertical: 6,
              backgroundColor: '#ffe252',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              Symptoms
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              right: 22,
              justifyContent: 'center',
              paddingVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderIconAndText(require('../../assets/images/921171.png'))}
          </View>

          <LinearGradient
            colors={gradientColors}
            style={styles.gradientLayer}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 22,
              left: 22,
              right: 22,
            }}></View>
        </View>
      </Pressable>
      {/* Prevention */}

      <Space size={18} />

      <Pressable
        onLayout={event => setPrevention(event.nativeEvent.layout)}
        onPress={() => navigation.navigate('Prevention')}>
        <View
          style={{
            height: 222,
            marginBottom: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS + 4,
              overflow: 'hidden',
              padding: 3,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: BORDER_RADIUS,
              }}
              source={require('../../assets/images/Prevention.jpg')}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              left: 22,
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS,
              justifyContent: 'center',
              paddingHorizontal: 14,
              paddingVertical: 6,
              backgroundColor: '#ffe252',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              Prevention
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              right: 22,
              justifyContent: 'center',
              paddingVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderIconAndText(require('../../assets/images/921171.png'))}
          </View>

          <LinearGradient
            colors={gradientColors}
            style={styles.gradientLayer}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 22,
              left: 22,
              right: 22,
            }}></View>
        </View>
      </Pressable>

      {/* Specialist */}

      <Space size={18} />

      <Pressable
        onLayout={event => setSpecialist(event.nativeEvent.layout)}
        onPress={() => navigation.navigate('Specialist')}>
        <View
          style={{
            height: 222,
            marginBottom: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS + 4,
              overflow: 'hidden',
              padding: 3,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: BORDER_RADIUS,
              }}
              source={require('../../assets/images/stethescope.png')}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              left: 22,
              borderWidth: BORDER_WIDTH,
              borderColor: theme.border,
              borderRadius: BORDER_RADIUS,
              justifyContent: 'center',
              paddingHorizontal: 14,
              paddingVertical: 6,
              backgroundColor: '#ffe252',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              Specialist
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              top: 22,
              right: 22,
              justifyContent: 'center',
              paddingVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderIconAndText(require('../../assets/images/921171.png'))}
          </View>

          <LinearGradient
            colors={gradientColors}
            style={styles.gradientLayer}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 22,
              left: 22,
              right: 22,
            }}></View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientLayer: {
    ...StyleSheet.absoluteFillObject,
    bottom: 4,
    left: 4,
    right: 4,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default MostPopular;
