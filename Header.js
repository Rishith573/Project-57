import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style={style.BgColor}>
        <Text style={style.HeaderStyle}>News Letter</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  HeaderStyle: {
    alignSelf: "center",
    fontFamily: "algerian",
    color:"white",
    fontSize: 30,
    fontWeight: "bold",
    borderWidth:5,
    borderRadius:20,
    backgroundColor: "blue",
    width: "125%"
  },
  BgColor: {
    alignItems:"center",
  }
})