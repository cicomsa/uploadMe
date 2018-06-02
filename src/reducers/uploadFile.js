import {UPLOAD_FILE} from '../actions/uploadFile'

export default function(state = [], {type, payload}) {
    switch(type) {
        case UPLOAD_FILE:
            return state.concat(payload)
        default:
            return state
    }
  }