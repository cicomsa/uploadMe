import {GET_FILE} from '../actions/file'

export default function(state = [], {type, payload}) {
    switch(type) {
        case GET_FILE:
            return payload
        default:
            return state
    }
}