import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FavoritesScreen = props => {
    return <View>
            <Text>Joels Favorite Jokes</Text>
            <Text>Hello World</Text>
            </View>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default FavoritesScreen;