export const FETCH_JOKES = 'FETCH_JOKES';
export const ONE_JOKE = 'ONE_JOKE';
import Jokes from '../../models/jokes';
import {JOKES} from '../actions/jokes';


export const fetchJokes = () => {
    return async (dispatch,getState) => {
        console.log("running fetch jokes function");
        const response = await fetch('http://ec2-52-202-15-10.compute-1.amazonaws.com:8000/api/Joke/',
        {
            method: "GET",
            headers: {
                "Authorization": "Token dab12abac8490cd588d905176620cd032b078bac",
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
        }
        const responseData = await response.json();
        //console.log('response data',responseData);
        const loadedJokes = [];
        for (const key in responseData) {
            loadedJokes.push(
                new Jokes(responseData[key].category,
                    responseData[key].jokeType,
                    responseData[key].joke,
                    responseData[key].setup,
                    responseData[key].delivery,
                    responseData[key].isNSFW,
                    responseData[key].isReligious,
                    responseData[key].isRacist,
                    responseData[key].isPolitical,
                    responseData[key].isSexist,
                    responseData[key].idNum
                )
            )
        }
        //console.log('loaded jokes:',loadedJokes);
        dispatch({
            type: FETCH_JOKES,
            allJokes: loadedJokes,
        });
    };
};

export const fetchOneJoke = (jokesArray) => {
    console.log('inside fetchOneJoke');
    console.log('NEW Jokes Array length \n',jokesArray.length);
    //console.log('jokesArray.length: ',jokesArray.length);
    let randomNum = Math.floor((Math.random() * jokesArray.length) + 1);
    console.log('random number generated',randomNum);
    let oneJoke = jokesArray[randomNum];
    console.log('oneJoke: \n',oneJoke);
    return async (dispatch,getState) => {
        dispatch({
            type: ONE_JOKE,
            oneJoke: oneJoke,
        });
    };
}