import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
const DetailsScreen = props => {
    //console.log(props.route);
    let jokeId = -1;
    if (typeof props.route.params != 'undefined') {
        jokeId = props.route.params['id'];
    }

    const thisJoke = useSelector((state) => state.jokes.allJokes.find((joke) => joke.id == jokeId));
    return (
        <View style={styles.screen}>
            <Text>{thisJoke.category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default DetailsScreen;