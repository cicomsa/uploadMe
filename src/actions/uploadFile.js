export const UPLOAD_FILE = "UPLOAD_FILE"

export const uploadFile = (file) => ({
    type: UPLOAD_FILE,
    payload: file
}) 
  