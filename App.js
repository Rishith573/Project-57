import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Horoscope from './screens/Horoscope';
import JokeScreen from './screens/JokeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  screen1: HomeScreen,
  screen2: Horoscope,
  screen3: JokeScreen,
  screen4: NewsScreen,
  screen5: WeatherScreen
});

const AppContainer = createAppContainer(AppNavigator);

