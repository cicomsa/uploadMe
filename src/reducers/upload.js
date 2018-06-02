import {UPLOAD} from '../actions/upload'

export default function(state = [], {type, payload}) {
    switch(type) {
        case UPLOAD:
            state.concat(payload)
            break
        default:
            return state
    }
  }