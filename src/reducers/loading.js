import { TOGGLE_LOADING } from '../actions/types';

const initialState = false;

export default function(state = initialState, action){
    switch(action.type){
        case TOGGLE_LOADING:
            return(state = action.payload);
        default:
            return state;
    }
}