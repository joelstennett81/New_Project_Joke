import {JOKES} from '../../data/dummy-data';

const initialState = {
    allJokes: JOKES,
    favoriteJokes: JOKES.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    return state;
}