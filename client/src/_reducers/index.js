import { combineReducers } from 'redux';
import user from './user_reducer';
import chat from './chat_reducer';
import channel from './channel_reducer';

const rootReducer = combineReducers({
    user,
    chat,
    channel,
});

export default rootReducer;