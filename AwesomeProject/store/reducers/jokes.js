import {JOKES,FAV_JOKES} from '../../data/dummy-data';
import {FETCH_JOKES,ONE_JOKE} from '../actions/jokes';

const initialState = {
    allJokes: JOKES,
    favoriteJokes: FAV_JOKES,
    twopartJokes: JOKES.filter(double => double.jokeType == "twopart"),
    singleJokes: JOKES.filter(single => single.jokeType == 'single'),
    oneJoke: JOKES,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOKES:
            return {
                allJokes: action.allJokes
            };
        case ONE_JOKE:
            return {
                oneJoke: action.oneJoke
            };
    }
    return state;
};
