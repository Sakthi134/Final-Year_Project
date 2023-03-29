import React, {useState} from 'react';
import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';

import {LAYOUT_HORIZONTAL_PADDING} from '../utils';
import Text from '../shared/Text';

const TopTabs = ({tabTitle, selectedIndex, setSelectedIndex, handleScroll}) => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 20,
        }}>
        {tabTitle.map((data, index) => {
          return (
            <Tab
              key={index}
              index={index}
              title={data.title}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              handleScroll={handleScroll}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Tab = ({index, title, selectedIndex, setSelectedIndex, handleScroll}) => {
  const [layoutW, setLayoutW] = useState(0);

  const isSelected = selectedIndex === index;

  const style = {
    fontWeight: isSelected ? 'bold' : 'normal',
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleScroll(index);
        setSelectedIndex(index);
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          // marginRight: 1,
        }}
        // onLayout={(e) => {
        //     setLayoutW(e.nativeEvent.layout.width);
        // }}
      >
        <View>
          <Text
            onLayout={e => {
              setLayoutW(e.nativeEvent.layout.width);
            }}
            style={[
              {
                color: 'black',
                fontSize: 16,
              },
              style,
            ]}>
            {title}
          </Text>
          {isSelected && (
            <View
              style={{
                position: 'absolute',
                height: 5,
                width: layoutW,
                bottom: -5,
                left: 0,
                right: 0,
                marginLeft: 2,
                backgroundColor: 'rgba(255, 162, 39, .6)',
              }}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopTabs;
