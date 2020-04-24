import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FavoritesScreen = props => {
    return <View>
            <Text>Favorites Screen</Text>
            <Text>This will be where I put the favorite jokes</Text>
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