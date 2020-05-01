import React, {useEffect,useCallback} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/colors';
import ReduxThunk from 'redux-thunk';
import * as jokeActions from "../store/actions/jokes";

const HomeScreen = props => {
    const jokes = useSelector((state) =>state.jokes.allJokes);
    //console.log(jokes);
    const dispatch = useDispatch();
    const loadJokes = useCallback(async () => {
        try {
            await dispatch(jokeActions.fetchJokes());
        } catch (err) {
            console.log(err);
        }

    }, [dispatch]);

    useEffect(() => {
        loadJokes();
    },[dispatch]);

    const selectJokeHandler = (id) => {
        props.navigation.navigate('Details',{id: id});
    };

    const renderItemHandler = itemData => {
        return itemData.jokeType == 'single' ? (
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={() => {selectJokeHandler(itemData.id)}} useForeground>
                        <Text style={styles.listItemContent}>{itemData.joke}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={() => {}} useForeground>
                        <Text>{itemData.setup}</Text>
                        <Text>{itemData.delivery}</Text>
                    </TouchableOpacity>
                </View>
            );
    }
    const ShowJoke = props => {
                return props.data.jokeType == 'single' ? (
                        <View style={styles.listItem}>
                            <TouchableOpacity onPress={() => {selectJokeHandler(props.data.id)}} useForeground>
                                <Text style={styles.listItemContent}>{props.data.joke}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.listItem}>
                            <TouchableOpacity onPress={() => {}} useForeground>
                                <Text>{props.data.setup}</Text>
                                <Text>{props.data.delivery}</Text>
                            </TouchableOpacity>
                        </View>
                    );
    };
    // generate a random number
    let randomNum = 10;
    let data = jokes[randomNum];
    return (
        <View style={styles.screen}>
            <Text> Home Screen </Text>
            <ShowJoke data={data} />

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