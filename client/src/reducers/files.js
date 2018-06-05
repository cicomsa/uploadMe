import {GET_FILES} from '../actions/file'

export default function(state = [], {type, payload}) {
    switch(type) {
        case GET_FILES:
            return payload
        default:
            return state
    }
}