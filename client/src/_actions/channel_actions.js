import axios from 'axios';
import {
    GET_CHANNELS,
    REGISTER_CHANNEL,
    AFTER_REGISTER_CHANNEL
} from './types';
import { CHANNEL_SERVER } from '../components/Config.js';

export function registerChannel(dataToSubmit){
    debugger;
    const request = axios.post(`${CHANNEL_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_CHANNEL,
        payload: request
    }
}

export function getChannels(owner){
    const request = axios.get(`${CHANNEL_SERVER}/getChannels/${owner}`)
        .then(response => response.data);
    
    return {
        type: GET_CHANNELS,
        payload: request
    }
}
export function afterRegisterChannel(data){

    return {
        type: AFTER_REGISTER_CHANNEL,
        payload: data
    }
}