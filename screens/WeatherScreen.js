import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';

export default class Horoscope extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('screen1')}}>
          <Image
          style={{width:30, height:30, marginTop:50}}
          source={require('../assets/Left-Arrow.png')}
          />
        </TouchableOpacity>
        <Text style={{marginTop:20}}>Breaking News! 
      In egypt, the temperature has fallen upto -400 degrees celsius. In antarctica, the temperature rose upto 800 degrees celsius.😂😂😂</Text>
      </View>
    )
  }
}