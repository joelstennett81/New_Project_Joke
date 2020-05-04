import React, {useEffect,useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/colors';
import ReduxThunk from 'redux-thunk';
import * as jokeActions from "../store/actions/jokes";
import Constants from 'expo-constants';

const HomeScreen = props => {
const [isLoading, setIsLoading] = useState(false);
    const jokes = useSelector((state) =>state.jokes.allJokes);
    let randomNum = 0;
    let data;
    //console.log(jokes);
    const dispatch = useDispatch();
    const loadJokes = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(jokeActions.fetchJokes());
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        console.log('inside useEffect');
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
        console.log(props);
        return props.data.jokeType == 'single' ? (
            <SafeAreaView style={styles.listItem}>
                <TouchableOpacity onPress={() => {selectJokeHandler(props.data.id)}} useForeground>
                    <Text style={styles.listItemContent}>{props.data.joke}</Text>
                </TouchableOpacity>
            </SafeAreaView>
            ) : (
                <SafeAreaView style={styles.listItem}>
                    <TouchableOpacity onPress={() => {}} useForeground>
                        <Text>{props.data.setup}</Text>
                        <Text>{props.data.delivery}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            );
    };
    const generateNewJoke = j => {
        console.log('in generateNewJoke');
        randomNum = Math.floor((Math.random() * jokes.length) + 1);
        console.log('random number generated',randomNum);
        data = jokes[randomNum];
        console.log('new joke generated: ', data);
    };
    // generate a random number
    generateNewJoke();
    //let data = jokes[randomNum];
    return (
        <View style={styles.screen}>
            <Text> Home Screen </Text>
            { (isLoading) ? (
                <Text> "Still Loading Data" </Text> ) :
            (
                <ShowJoke data={data} />
                ) }
            <Button title="New Joke" OnPress={generateNewJoke} />
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