import React, {useEffect,useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/colors';
import ReduxThunk from 'redux-thunk';
import * as jokeActions from "../store/actions/jokes";
import Constants from 'expo-constants';
import {fetchOneJoke} from "../store/actions/jokes";
let firstVariable = 1; // This shows the first time we are in app
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
    const ShowJoke = props => {
        console.log(props);
        if (!props.data)
        {
            return (<Text style={styles.title}>There is an error!</Text>);
        }
        else if (props.data.jokeType == 'single')
        {
            firstVariable = 2;
            return (
                <SafeAreaView style={styles.listItem}>
                    <Text style={styles.listItemContent}>{props.data.joke}</Text>
                </SafeAreaView>);
        }
        else if (props.data.jokeType == 'twopart')
        {
            firstVariable = 3;
            return (
                <SafeAreaView style={styles.listItem}>
                    <Text>{props.data.setup}</Text>
                    <Text>{props.data.delivery}</Text>
                </SafeAreaView>
            );
        }
        else
        {
            return (<Text style={styles.title}>There is an error!</Text>);
        }
        /*return (if props.data.jokeType == 'single': ? (
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
            )*/
    };
    const generateNewJoke = () => {
        console.log('in if generateNEWJoke');
        randomNum = Math.floor((Math.random() * jokes.length) + 1);
        console.log('random number generated',randomNum);
        data = jokes[randomNum];
        console.log('new joke generated: ', data);
    };

    generateNewJoke();
    //let data = jokes[randomNum];
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Joke of the Day </Text>
            { (isLoading) ? (
                <Text style={styles.title}> "Loading Data" </Text> ) :
            (
                <ShowJoke data={data} />
                ) }
                <TouchableOpacity onPress={jokeActions.fetchOneJoke(jokes)}>
                    <Text> New Joke </Text>
                </TouchableOpacity>
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
    },
    title: {
        fontSize: 30
    },
});
export default HomeScreen;