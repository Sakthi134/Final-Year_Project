


///
///     (╯ ͡❛ ͜ʖ ͡❛)╯┻━┻
/// **************************************************************
/// Instagram @ys.sherzad  *************************
/// Twitter @ys_sherzad  ********************
/// **************************************************************
/// "Make Everyday Count" 🇦🇫
///
///

import Animated, {
    Easing,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import { BORDER_RADIUS, BORDER_WIDTH } from '../utils';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Space from '../shared/Space';
import Text from '../shared/Text';
import { snapPoint } from 'react-native-redash';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

const CARD_HEIGHT = 280;

const CARD_WIDTH = width - 80;
const SPAN_POINTS = [-width, 0, width];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CardList = ({
    groupSavings,
    onAnimationStart,
    onAnimationEnd,
}) => {
    const shuffleBack = useSharedValue(false);

    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            setData(groupSavings);
        }, 850);
    }, []);

    return (
        <View style={{
            height: CARD_HEIGHT,
            width: width,
        }}>
            <View>
                {data && data.map((item, index) => (
                    <Card
                        key={item.id}
                        {... { item }}
                        {...{ index }}
                        {...{ onAnimationStart }}
                        {...{ onAnimationEnd }}
                        {...{ shuffleBack }}
                    />
                ))}
            </View>
        </View>
    );
};




const Card = React.memo(({ item, index, onAnimationStart, onAnimationEnd, shuffleBack }) => {

    const DURATION = 250;
    const ROTATEX = 15;

    const DETAIL_SECTION_HEIGHT = 100;

    const x = useSharedValue(width);
    const y = useSharedValue(0);
    const theta = randomNumber(-4, 4);
    const rotateZ = useSharedValue(0);
    const rotateX = useSharedValue(ROTATEX);
    const scale = useSharedValue(1);

    const cardHeight = useSharedValue(CARD_HEIGHT);
    const opacity = useSharedValue(0);

    useEffect(() => {
        const delay = index * DURATION;
        x.value = withDelay(
            delay,
            withSpring(0));

        rotateZ.value = withDelay(delay, withSpring(theta));
    }, [index, rotateZ, theta, y]);

    useAnimatedReaction(
        () => shuffleBack.value,
        (v) => {
            if (v) {
                const duration = 150 * index;
                x.value = withDelay(
                    duration,
                    withSpring(0, {}, () => {
                        shuffleBack.value = false;
                    })
                );
                rotateZ.value = withDelay(duration, withSpring(theta));
            }
        }
    );

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.x = x.value;
            ctx.y = y.value;
            scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) });
            rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
            rotateX.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
            cardHeight.value = withTiming(CARD_HEIGHT + DETAIL_SECTION_HEIGHT, { easing: Easing.inOut(Easing.ease) });
            opacity.value = withDelay(80, withTiming(1, { easing: Easing.inOut(Easing.ease) }));

            runOnJS(onAnimationStart)();

        },
        onActive: ({ translationX, translationY }, ctx) => {
            if (translationY < -90) {
                y.value = ctx.y + (-90);
            } else {
                y.value = ctx.y + translationY;
            }
            x.value = ctx.x + translationX;
        },
        onEnd: ({ velocityX, velocityY, translationX, translationY }) => {
            const dest = snapPoint(x.value, velocityX, SPAN_POINTS);
            x.value = withTiming(dest);
            y.value = withTiming(0);
            scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) });
            scale.value = withTiming(1, {}, () => {
                const isLast = index === 0;
                const isSwipedLeftOrRight = dest !== 0;
                if (isLast && isSwipedLeftOrRight) {
                    shuffleBack.value = true;
                }
            });
            rotateZ.value = withTiming(theta, { easing: Easing.inOut(Easing.ease) });
            rotateX.value = withTiming(ROTATEX, { easing: Easing.inOut(Easing.ease) });
            cardHeight.value = withTiming(CARD_HEIGHT, { easing: Easing.inOut(Easing.ease) });
            opacity.value = withTiming(0, { duration: 100, easing: Easing.inOut(Easing.ease) });

            runOnJS(onAnimationEnd)();

        }

    });


    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 2000 },
            { translateX: x.value },
            { translateY: y.value },
            { rotateX: `${rotateX.value}deg` },
            { rotateZ: `${rotateZ.value}deg` },
            { scale: scale.value }
        ],
        height: cardHeight.value,

    }));

    const detailSectionStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }));


    const renderIconAndText = (imgPath, text) => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Image
                source={imgPath}
                style={{
                    height: 17,
                    width: 17,
                    resizeMode: 'cover',
                }}
            />
            <Text style={{
                color: theme.tertiary,
                fontSize: 13,
            }}>
                {text}
            </Text>
        </View>
    );


    return (
        <View style={{
            ...StyleSheet.absoluteFillObject,
            alignItems: 'center',
        }} pointerEvents="box-none">
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
            >
                <Animated.View style={[styles.cardDefaultStyle, cardStyle]}>
                    <Image
                        source={item.img}
                        style={{
                            height: CARD_HEIGHT - 48,
                            width: '100%',
                            resizeMode: 'cover',
                            borderRadius: BORDER_RADIUS,
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                    }}>

                        {renderIconAndText(require('../../assets/icons/star.png'))}
                        <Space horizontal size={8} />
                        {renderIconAndText(require('../../assets/images/stethescope.png'))}
                        <Space horizontal size={8} />
                        {renderIconAndText(require('../../assets/icons/search.png'))}

                        <View style={{ flex: 1 }} />

                        <Image style={{
                        height:15,width:15
                    }} source={require('./../../assets/images/921171.png')}></Image>
                    </View>

                    <Animated.View style={[styles.detailSectionDefaultStyle, detailSectionStyle]}>
                        
                        <Space size={5} />
                        <Text style={{
                            fontSize: 14,
                        }}>{item.Decs}</Text>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

        </View>
    );
}, () => true);

const styles = StyleSheet.create({
    cardDefaultStyle: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderWidth: BORDER_WIDTH,
        borderColor: theme.border,
        padding: 3,
        borderRadius: BORDER_RADIUS + 4,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 5.65,
        // elevation: 5,
    },
    detailSectionDefaultStyle: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});

export default CardList;
