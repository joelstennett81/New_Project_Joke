import React from 'react';
import {StyleSheet, View, Test, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = props => {
    const jokes = useSelector(state =>state.jokes.allJokes);

    const renderItemHandler = itemData => {
        return (
            <View style={styles.listItem}>
                <Text>{itemData.item.name}</Text>
            </View>
            );
    }
    return
        <View style={styles.screen}>
            <FlatList
            keyExtractor={(item,index) => item.id.toString()}
            data ={jokes}
            renderItem={renderItemHandler}
            />
        </View>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        margin: 5,
        padding: 10,
    }
});
export default HomeScreen;