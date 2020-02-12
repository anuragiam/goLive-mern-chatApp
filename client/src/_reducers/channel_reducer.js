import {
    GET_CHANNELS,
    AFTER_REGISTER_CHANNEL
} from '../_actions/types';
 
export default function(state={},action){
    switch(action.type){
        case GET_CHANNELS:
            return {...state, channels: action.payload }
            case AFTER_REGISTER_CHANNEL:
                return {...state, channels: state.channels.concat(action.payload)}
        default:
            return state;
    }
}