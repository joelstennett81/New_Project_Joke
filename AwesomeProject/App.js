import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import jokesReducer from './store/reducers/jokes';
import HomeTabNavigator from './components/JokeNavigator';
import 'react-native-gesture-handler';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    jokes: jokesReducer,
});


const dataStore = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFont = () => {
    return Font.loadAsync({
        playfair: require('./assets/PlayfairDisplay-Black.ttf'),
        "playfair-bold": require('./assets/PlayfairDisplay-Bold.ttf'),
        "playfair-italic": require('./assets/PlayfairDisplay-BlackItalic.ttf')
    });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded){
    return (
        <AppLoading
            startAsync={fetchFont}
            onFinish={() => setFontLoaded(true)}
            onError ={err => console.log(err)}
        />
    );
  }
  return (
    <Provider store = {dataStore}>
        <HomeTabNavigator />
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
