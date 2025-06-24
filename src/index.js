const express = require('express');
const { ServerConfig } = require("./config/index");

const { router: apiRoutes } = require('./routes/index');




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Succesfully started the server on ${ServerConfig.PORT}`);
});
