const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const app = express();

//if this port is changed you will need to change same in the frontend app
const port = 5024;


//configuring swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Client's App",
            description: "Practical test project for fullstack javascript developer role",
            version: "1.0.0",
            contact: {
                name: "Maxwell Adapoe",
                email:"maxwelladapoe@gmail.com"
            },
            servers: ["http://localhost:5024"]
        }
    },
    apis: [
        "routes.js"
    ],
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(express.json());
app.use(cors());
app.options('*', cors());

//routes
let routes = require('./routes')
app.use('/',routes);


//setup mongoose
//the url can be placed in a .env file but keeping things simple for now
let dbLink = "mongodb://clientsAppDbUser:clientsAppDbUser@clientsappcluster-shard-00-00.ntnqg.mongodb.net:27017,clientsappcluster-shard-00-01.ntnqg.mongodb.net:27017,clientsappcluster-shard-00-02.ntnqg.mongodb.net:27017/clientAppDatabase?ssl=true&replicaSet=atlas-k1cvx9-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(dbLink, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("DB Connection was successful");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
}).catch((error) => {
    console.log("DB Connection error: ", error)
})




