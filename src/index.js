import { ApolloServer } from "apollo-server-express";
import express from 'express';
import mongoose from 'mongoose';
import { SECRET } from "./constants";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
var cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const isAuth = require('./middleware/is-auth');

const startServer = async () =>{
    
    const server = new ApolloServer({
        // These will be defined for both new and existing servers
        typeDefs,
        resolvers,
        context: ({req, res}) => ({req, res})
    });
    

    //contecting to mongoDB
    await mongoose.connect('mongodb+srv://tyler:Football93%21@cluster0.cpci2.mongodb.net/lol', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    
    const app = express();

    app.use(cookieParser());

    app.use((req, _, next) => {
        const token = req.cookies['token'];
        try{
            const data = jwt.verify(token, SECRET)
            req.userId = data.userId;
        }catch{}
        
        
        next();
    });

    server.applyMiddleware({app}); //app is from an existing express app
    
    
    mongoose.set('useFindAndModify', false);

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