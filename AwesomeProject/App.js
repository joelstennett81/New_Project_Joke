import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import jokesReducer from './store/reducers/jokes';

const rootReducer = combineReducers({
    jokes: jokesReducer,
});
const dataStore = createStore(rootReducer);

const fetchData = () => {
    return Font.loadAsync({
        playfair: require('./assets/PlayfairDisplay-Black.ttf'),
        "playfair-bold": require('./assets/PlayfairDisplay-Bold.ttf'),
        "playfair-italic": require('./assets/PlayfairDisplay-BlackItalic.ttf')
    });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!dataLoaded){
    return (
        <AppLoading startAsync={fetchData} onFinish={() => setDataLoaded(true)} onError ={err => console.log(err)}
        />
    );
  }
  return (
    <Provider store = {dataStore}>
        <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "playfair",
  }
});
