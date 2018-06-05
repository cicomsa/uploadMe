import * as request from 'superagent'
export const UPLOAD_FILE = "UPLOAD_FILE"
export const GET_FILE = "GET_FILE"
export const GET_FILES = "GET_FILES"

const baseUrl = 'http://localhost:4000'

export const uploadFile = (file) => (dispatch) => {
    request
        .post(`${baseUrl}/images`) 
        .send(file)
        .then(response => dispatch({
            type: UPLOAD_FILE,
            payload: response.body
        }))
        .catch(err => console.log(err))
}

export const getFile = (id) => (dispatch) => {
    request
        .get(`${baseUrl}/images/${id}`)
        .then(response => dispatch({
            type: GET_FILE,
            payload: response.body
        }))
        .catch(err => console.log(err))
}

export const getFiles = (id) => (dispatch) => {
    request
        .get(`${baseUrl}/images`)
        .then(response => dispatch({
            type: GET_FILES,
            payload: response.body
        }))
        .catch(err => console.log(err))
}