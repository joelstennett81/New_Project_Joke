import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FavoritesScreen = props => {
    return <View>
            <Text>Favorites Screen</Text>
            <Text>Full of Favorite Jokes</Text>
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