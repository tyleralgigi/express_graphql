import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
import {buildFederatedSchema} from "@apollo/federation";
import mongoose from 'mongoose';
import {resolvers} from "./resolvers";
import {typeDefs} from "./typeDefs";

const startServer = async () =>{
    const app = express();

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });


    
    const server = new ApolloServer({
        // These will be defined for both new and existing servers
        typeDefs,
        resolvers
    });
    
    server.applyMiddleware({app}); //app is from an existing express app
    
    //contecting to mongoDB
    await mongoose.connect('mongodb+srv://tyler:Football93%21@cluster0.cpci2.mongodb.net/lol', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    app.listen({port: 80}, () => 
        console.log(`server is ready at http://localhost:80${server.graphqlPath}`)
    );


};

startServer();

/*
       context: () => {
            return { 
                eventLoader: new DataLoader(async keys => {
                    const events = await Event.findById
                })
            }
        }
*/