import React from 'react';
import Colors from '../constants/colors';
import {FAV_JOKES} from '../data/dummy-data';
import {StyleSheet,View, Text, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, Button} from 'react-native';

const FavoritesScreen = props => {
    const renderItemHandler2 = itemData => {
        return itemData.item.jokeType == "twopart" ? (
            <View style={styles.listItem}>
                <Text>{itemData.item.setup}</Text>
                <Text>{itemData.item.delivery}</Text>
            </View>
        ): (
            <View style={styles.listItem}>
                <Text>{itemData.item.joke}</Text>
            </View>
        );
    }
    return (
            <View style={styles.screen}>
                <Text style={styles.title}>Joels Favorite Jokes</Text>
                <FlatList
                keyExtractor={(item,index) => item.id.toString()}
                data={FAV_JOKES}
                renderItem={renderItemHandler2}
                />
            </View>
        );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin: 2,
    },
    listItem: {
        margin: 5,
        padding: 10,
    },
    listItemContent: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        alignItems: 'center',
    }
});
export default FavoritesScreen;