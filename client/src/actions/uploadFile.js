import * as request from 'superagent'
export const UPLOAD_FILE = "UPLOAD_FILE"

const baseUrl = 'http://localhost:4000'

export const uploadFile = (file) => (dispatch) => {
  
    request
        .post(`${baseUrl}/images`)
    //   
        .send(file)
        .then(response => dispatch({
            type: UPLOAD_FILE,
            payload: response.body
      }))
  }
  