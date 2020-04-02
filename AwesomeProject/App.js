import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header title="Hello World" />
      <Text>Joel Stennett</Text>
      <Text>This is my Jokes App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
