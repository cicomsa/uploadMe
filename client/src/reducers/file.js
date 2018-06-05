import {GET_FILE, UPLOAD_FILE } from '../actions/file';

export default function(state = [], {type, payload}) {
    switch(type) {
        case UPLOAD_FILE:
            return payload
        case GET_FILE:
            return payload
        default:
            return state
    }
}