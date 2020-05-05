import React, {useEffect,useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/colors';
import ReduxThunk from 'redux-thunk';
import * as jokeActions from "../store/actions/jokes";
import Constants from 'expo-constants';
import {fetchOneJoke} from "../store/actions/jokes";

const HomeScreen = props => {
    console.log('Inside top of homescreen');
    const [isLoading, setIsLoading] = useState(false);
    const jokes = useSelector((state) =>state.jokes.allJokes);
    const [thisJoke,setThisJoke] = useState({});
    let data;
    //console.log(jokes);
    const dispatch = useDispatch();
    const loadJokes = useCallback(async () => {
        console.log('in load jokes');
        setIsLoading(true);
        try {
            await dispatch(jokeActions.fetchJokes());
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
        setThisJoke(jokes[0]);
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
            return (<Text style={styles.title}>Jokes are Loading</Text>);
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
    };
    const generateNewJoke = () => {
        console.log('in if generateNEWJoke');
        let randomNum = Math.floor((Math.random() * jokes.length) + 1);
        console.log('random number generated',randomNum);
        setThisJoke(jokes[randomNum]);
    };

    //generateNewJoke();
    //let data = jokes[randomNum];
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Joke of the Day </Text>
            { (isLoading) ? (
                <Text style={styles.title}> "Loading Data" </Text> ) :
            (
                <ShowJoke data={thisJoke} />
                ) }
                <TouchableOpacity onPress={() => generateNewJoke()}>
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