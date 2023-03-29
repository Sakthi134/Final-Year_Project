import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import CardList from './CardList';
import CheckDiseases from './CheckDiseases';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import MostPopular from './MostPopular';
import QuestionSection from './QuestionSection';
import { SCR_HEIGHT } from '../utils';
import ScaleAnimation from '../shared/ScaleAnimation';
import Space from '../shared/Space';
import Text from '../shared/Text';
import TopTabs from './TopTabs';
import { groupSavings } from '../repo/data';

const gradientColors = [
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.57)',
    'rgba(0,0,0,0.78)'
];

const Home = ({navigation}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const opacity = useSharedValue(0);

    onCardAnimationStart = () => {
        setShowOverlay(true);
        opacity.value = withTiming(1, { easing: Easing.inOut(Easing.ease) });
    };

    onCardAnimationEnd = () => {
        opacity.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
        setTimeout(() => {
            setShowOverlay(false);
        }, 300);
    };

    const bottomOverlayStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const bottomOverlayDefaultStyle = {
        ...StyleSheet.absoluteFillObject,
        top: SCR_HEIGHT * (2 / 3),
        zIndex: 1
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>

            <ScaleAnimation>
                <Header />
            </ScaleAnimation>

            <ScrollView>
                <ScaleAnimation>
                    <QuestionSection />
                </ScaleAnimation>

                <ScaleAnimation>
                    <TopTabs />
                </ScaleAnimation>

                <Space size={14} />

                <View style={{
                    zIndex: 3
                }}>
                    <CardList
                        {...{ groupSavings }}
                        onAnimationStart={onCardAnimationStart}
                        onAnimationEnd={onCardAnimationEnd}
                    />
                </View>

                <Space size={35} />

                <ScaleAnimation>
                    <MostPopular navigation={navigation}/>
                </ScaleAnimation>
                <CheckDiseases/>
            </ScrollView>


            {showOverlay && (
                <Animated.View style={[bottomOverlayDefaultStyle, bottomOverlayStyle]}>

                    <LinearGradient
                        colors={gradientColors}
                        style={{
                            height: '100%',
                            justifyContent: 'flex-end',
                            paddingHorizontal: 20,
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Arrow
                                title='Skip'
                                icon={require('../../assets/icons/arrow-left.png')}
                            />
                            <Arrow
                                title='Add'
                                icon={require('../../assets/icons/arrow-right.png')}
                            />
                        </View>
                    </LinearGradient>
                </Animated.View>
            )}

        </View>
    );
};

const Arrow = ({
    title,
    icon,
}) => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image
                source={icon}
                style={{
                    width: 60,
                    height: 60,
                    marginBottom: -12
                }}
            />
            <Text style={{
                fontSize: 16,
                color: '#fff',
                paddingBottom: 10,
                fontWeight: '600'
            }}>{title}</Text>
        </View>
    );
};

export default Home;
