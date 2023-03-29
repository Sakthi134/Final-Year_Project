import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import React from 'react';
import Text from '../shared/Text';
import { View } from 'react-native';
import { theme } from '../theme';

const CONTAINER_HEIGHT = 140;

const QuestionSection = ({
    params,
}) => (
    <View style={{
        height: CONTAINER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        paddingVertical: 20,
    }}>
        <Text style={{
            fontSize: 30,
            fontWeight: '400',
            color: theme.primary
        }}>
           Parkinson's Diseases...
        </Text>
        <Text>Know What is Parkinson's Diseases ?</Text>
    </View>
);

export default QuestionSection;
