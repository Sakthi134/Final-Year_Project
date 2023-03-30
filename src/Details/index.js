import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, {useState} from 'react';

const Details = ({navigation}) => {
    const [text, setText] = useState('Ranchel');
    const [text1, setText1] = useState('Rose');
    const [text2, setText2] = useState('62');
    const [text3, setText3] = useState("Parkinson's Diseases");
    const [text4, setText4] = useState('5.1');
    const [text5, setText5] = useState('60');
    const [isMaleSelected, setIsMaleSelected] = useState(false);
    const changeImage = gender => {
      if (gender == 'female') {
        setIsMaleSelected(false);
      } else {
        setIsMaleSelected(true);
      }
    }
    return(
        
              <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => changeImage('male')}>
            {/* Male Image */}
            <Image
              source={
                !isMaleSelected
                  ?  require('./../../assets/images/person-icon-transparent-background-6.jpg')
                : require('./../../assets/images/Check-Mark-Tick-Transparent-Clip-Art-Background.png')
              }
              style={{height: 150, width: 150, marginLeft: 30, marginTop: 20}}
            />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => changeImage('female')}>
            <Image
              source={
                isMaleSelected
                ?  require('./../../assets/images/Female_Dark.png')
                : require('./../../assets/images/Check-Mark-Tick-Transparent-Clip-Art-Background.png')
              }
              style={{
                height: 150,
                width: 150,
                marginLeft: 30,
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}>
          <TextInput
            placeholder="First Name"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.Name}
          />
          <TextInput
            placeholder="Last Name"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            style={styles.Name}
          />
        </View>
        <View>
          <TextInput
            keyboardType="numeric"
            placeholder="Age"
            value={text2}
            onChangeText={text2 => setText2(text2)}
            style={styles.Bal}
          />
          <TextInput
            placeholder="Disease"
            value={text3}
            onChangeText={text3 => setText3(text3)}
            style={styles.Bal}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Height"
            value={text4}
            onChangeText={text4 => setText4(text4)}
            style={styles.Bal}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Weight"
            value={text5}
            onChangeText={text5 => setText5(text5)}
            style={styles.Bal}
            maxLength={5}
          />
  
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
              <Text style={{color: 'white',fontSize:20}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
        
    )
}

  const styles = StyleSheet.create({
    Name: {
      backgroundColor: '#c3addb',
      width: 178,
      height: 50,
      borderRadius: 10,
      padding: 10,
      borderColor: 'black',
      marginTop: 10,
      borderWidth:1
    },
  
    btn: {
      width: 150,
      height: 50,
      backgroundColor: '#4287f5',
      textAlign: 'center',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      marginBottom: 60,
      marginLeft: 115,
    },
  
    Bal: {
      backgroundColor: '#c3addb',
      height: 50,
      borderRadius: 5,
      padding: 10,
      marginTop: 20,
      margin: 10,
      color: 'black',
      borderColor: 'black',
      justifyContent: 'center',
      borderWidth:1
    },
  });
  
  export default Details;
  