import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import ImageController from "./images/controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
    cors: true,
    controllers: [ImageController]
})

setupDb()
    .then(_ =>
        app.listen(4000, () => console.log('Listening on port ' + port))
    )
    .catch(err => console.error(err))