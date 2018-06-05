import {GET_FILES, UPLOAD_FILE } from '../actions/file';

export default function(state = [], {type, payload}) {
    switch(type) {
        case UPLOAD_FILE:
            return state.concat(payload)
        case GET_FILES:
            return payload
        default:
            return state
    }
}