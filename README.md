# UploadMe

Project in progress...

## The main goal of the app is:

* To learn to upload, preview, send to database and display an image from a computer in a React-Redux app context

## To run the app:

In the client directory:

* To install the dependencies run ```yarn``` 
* To start the app run ```yarn start```

In the server directory:

* Have a ‘DATABASE_URL' environment variable set
* To start the TypeScript compiler run ```tsc -w```
* To connect to Postgres with TypeORM run ```yarn start```

### Routes

|**URI**|**VERB**|**ACTION**|
|-------------------|--------------|-----------------------------------|
| /upload           | GET&POST     | uploadImage (includes getImages)  |
| /display/:id      | GET          | displayImage                      |
