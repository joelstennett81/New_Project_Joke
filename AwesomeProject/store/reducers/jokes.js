import {JOKES} from '../../data/dummy-data';
import {FETCH_JOKES} from '../actions/jokes';
const initialState = {
    allJokes: JOKES,
    twopartJokes: JOKES.filter(double => double.jokeType == "twopart"),
    singleJokes: JOKES.filter(single => single.jokeType == 'single')
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOKES:
            return {
                allJokes: action.allJokes
            };
        //case CREATE_FAVORITE:
        /*case DELETE_FAVORITE:
            return {
                ...state,
                // action.
            }; */
    }
    return state;
};