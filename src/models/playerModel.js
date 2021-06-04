import mongoose from 'mongoose';


const playerSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    role:{
        type:String
    },
    summonerName:{
        type:String
    },
    image:{
        type:String
    },
    team:{
        type:String
    }
})

export default mongoose.model('playerModel', playerSchema,"players");