import { BORDER_RADIUS, BORDER_WIDTH, LAYOUT_HORIZONTAL_PADDING } from '../utils';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Space from '../shared/Space';
import Text from '../shared/Text';
import { causesData } from '../repo/data';
import { theme } from '../theme';

export const gradientColors = [
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.47)',
    'rgba(0,0,0,0.76)'
];



const Causes = () => {
    return (
        <View style={{
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        }}>
            

            <Space size={18} />
           <ScrollView>

            {causesData.map((post, index) => (
                <View key={index} style={{
                    height: 222,
                    marginBottom: 20,
                }}>
                    <View style={{
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
                            source={post.bgImg}
                            style={{
                                height: '100%',
                                width: '100%',
                                
                                borderRadius: BORDER_RADIUS,
                            }}
                        />
                    </View>

                    <View style={{
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

                        <Text style={{
                            fontSize: 13,
                            fontWeight: '500',
                        }}>{post.title}</Text>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        right: 22,
                        justifyContent: 'center',
                        paddingVertical: 6,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        
                    </View>

                    <LinearGradient colors={gradientColors} style={styles.gradientLayer} />

                    <View style={{
                        position: 'absolute',
                        bottom: 1,
                        left: 22,
                        right: 22,
                    }}>
                          
                        <Text style={{
                            fontSize: 14,
                            color: '#fff',
                            lineHeight: 15,
                        }}>
                            {post.Dec}
                        </Text>  

                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#fff',
                            lineHeight: 18,
                        }}>
                        </Text>
                    </View>
                </View>
            ))}
            </ScrollView>
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

export default Causes;
