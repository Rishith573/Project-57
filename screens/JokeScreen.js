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
        <Text style={{marginTop:20}}>What do you call a lazy baby kangaroo?
      Answer: A pouch potato. 😂</Text>
      </View>
    )
  }
}