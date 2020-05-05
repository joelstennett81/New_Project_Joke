import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
const DetailsScreen = props => {
    return (
    <View style={styles.screen}>
        <Text style={styles.title}>Welcome to Joels Jokes App</Text>
        <Text>This is my first attempt at creating an app</Text>
        <Text>I am currently working on adding more features</Text>
        <Text>My next step will be to make the New Joke Button Work</Text>
        <Text>I hope you find the jokes funny</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    title:
    {
        fontSize: 30,
        alignItems: 'center',
    }
});

export default DetailsScreen;