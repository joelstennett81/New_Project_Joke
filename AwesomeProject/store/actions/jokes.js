export const FETCH_JOKES = 'FETCH_JOKES';

import Jokes from '../../models/jokes';

export const fetchJokes = () => {
    return async (dispatch,getState) => {
        const response = fetch('http://ec2-52-202-15-10.compute-1.amazonaws.com:8000/api/Joke/',
        {
            method: "GET",
            headers: {
                "Authentication": "Token dab12abac8490cd588d905176620cd032b078bac ",
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
        }
        const responseData = await responseData.json();

        const loadedJokes = [];

        for (const key in responseData) {
            loadedJokes.push(
                new Joke(responseData[key].category,
                responseData[key].jokeType,
                responseData[key].joke,
                responseData[key].setup,
                responseData[key].delivery,
                responseData[key].isNSFW,
                responseData[key].isReligious,
                responseData[key].isRacist,
                responseData[key].isPolitical,
                responseData[key].isSexist,
                responseData[key].idNum)
            );
        }

        dispatch({
            type: FETCH_JOKES,
            allJoes: loadedJokes,
        });
    };
};