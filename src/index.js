import express from 'express'
import {ServerConfig }  from "./config/index.js";

import {router as apiRoutes } from './routes/index.js'





const app = express()
app.use(express.json())


app.use("/api" , apiRoutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`Succesfully started the server on ${ServerConfig.PORT}`)
})