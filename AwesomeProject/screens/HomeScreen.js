import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../constants/colors';
import ReduxThunk from 'redux-thunk';

const HomeScreen = props => {
    const jokes = useSelector(state =>state.jokes.allJokes);

    const selectJokeHandler = (id) => {
        props.navigation.navigate('Details',{id: id});
    };

    const renderItemHandler = itemData => {
        return itemData.item.type == 'single' ? (
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={() => {selectJokeHandler(itemData.item.id)}} useForeground>
                        <Text style={styles.listItemContent}>{itemData.item.joke}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={() => {}} useForeground>
                        <Text>{itemData.item.setup}</Text>
                        <Text>{itemData.item.delivery}</Text>
                    </TouchableOpacity>
                </View>
            );
    }
    return (
        <View style={styles.screen}>
            <Text> Home Screen </Text>
            <FlatList
                style={styles.list}
                keyExtractor={(item,index) => item.id.toString()}
                data ={jokes}
                renderItem={renderItemHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        padding: 10,
    },
    listItem: {
        shadowColor: Colors.primaryColor,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 5,
        width: '100%',
    },
    listItemContent: {
        padding: 10,
    }
});
export default HomeScreen;