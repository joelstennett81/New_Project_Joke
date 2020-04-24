import {JOKES} from '../../data/dummy-data';

const initialState = {
    allJokes: JOKES,
    twopartJokes: JOKES.filter(double => double.jokeType == "twopart"),
    singleJokes: JOKES.filter(single => single.jokeType == 'single')
};

export default (state = initialState, action) => {
    return state;
};