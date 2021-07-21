import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '../Header'

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{alignItems: "center", marginTop: 50}}>
        <Header/>
        <View>
          <TouchableOpacity style={[Style.Button, {backgroundColor:"lightgreen"}]} onPress={() => {this.props.navigation.navigate('screen3')}}>
          <Text style={Style.Text}>Read a joke</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Style.Button, {backgroundColor:"lightblue"}]} onPress={() => {this.props.navigation.navigate('screen5')}}>
          <Text style={Style.Text}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Style.Button, {backgroundColor:"orange"}]} onPress={() => {this.props.navigation.navigate('screen2')}}>
          <Text style={Style.Text}>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Style.Button, {backgroundColor:"violet"}]} onPress={() => {this.props.navigation.navigate('screen4')}}>
          <Text style={Style.Text}>Top News</Text>
        </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontWeight:"bold", fontSize:20, marginTop:20, alignSelf:"center"}}>Rate Us</Text>
          <TouchableOpacity>
           <Image
            style={{width:50, height:50, marginLeft:-10, marginTop:10}}
            source={require('../assets/thumbsup.png')}
           />
          </TouchableOpacity>
          <TouchableOpacity>
           <Image
            style={{width:50, height:50, marginLeft:55, marginTop:-35}}
            source={require('../assets/thumbsdown.png')}
           />
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const Style = StyleSheet.create({
  Button: {
    alignItems:"center",
    borderWidth: 2,
    borderRadius: 50,
    width: 200,
    height: 40,
    backgroundColor: "lightgreen",
    marginTop:20,
  },
  Text: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 20,
    fontFamily: "calibiri"}
})