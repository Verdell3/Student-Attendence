import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3' },
      { shouldPlay: true }
    )
  }

  render() {
    return (
      <TouchableOpacity style = {{
        marginLeft:100,
        borderWidth:1,
        borderColor:"red",
        alignItems:"center",
        justifyContent:"center",
      width:200,
      height:200,
      borderRadius:100,
      backgroundColor:"red"
      }}
      onPress = {this.playSound}>
      <Text style = {{
        fontSize:20,
        fontWeight:"bold",
        
      }}>
      CLICK ME
      </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


