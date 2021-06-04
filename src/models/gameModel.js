import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    Team1Bans:[{
        type: mongoose.Types.ObjectId,
        ref: 'champModel'
    }],
    Team2Bans:[{
        type: mongoose.Types.ObjectId,
        ref: 'champModel'
    }],
    Team1Dragons: {
        type:String
    },
    Team1Inhibitors: {
        type:String,
    },
    Team1Barons: {
        type:String,
    },
    Team1RiftHeralds: {
        type:String,
    },
    Team1Towers: {
        type:String,
    },
    Team2Dragons: {
        type:String,
    },
    Team2Inhibitors: {
        type:String,
    },
    Team2Barons: {
        type:String,
    },
    Team2RiftHeralds: {
        type:String,
    },
    Team2Towers: {
        type:String,
    },
    Gamename: {
        type:String,
    },
    DateTime_UTC: {
        type:String,
    },
    VOD: {
        type:String,
    },
    MatchId: {
        type:String,
    },
    Team1:{
        type: mongoose.Types.ObjectId,
        ref: 'teamModel'
    },
    Team2:{
        type: mongoose.Types.ObjectId,
        ref: 'teamModel'
    },
    Team1Score: {
        type:String,
    },
    Team2Score: {
        type:String,
    },
    Winner: {
        type:String,
    },
    Team1Players:[{
        playerId: {
            type: mongoose.Types.ObjectId,
            ref: 'playerModel'
        },
        champ:{
            type: mongoose.Types.ObjectId,
            ref: 'champModel'
        },
        kills:{
            type:String
        },
        Deaths:{
            type:String
        },
        Assists:{
            type:String
        },
        CS:{
            type:String
        },
        KeyStoneRune:{
            type:String
        },
        Role:{
            type:String
        }
    }],
    Team2Players:[{
        playerId: {
            type: mongoose.Types.ObjectId,
            ref: 'playerModel'
        },
        champ:{
            type: mongoose.Types.ObjectId,
            ref: 'champModel'
        },
        kills:{
            type:String
        },
        Deaths:{
            type:String
        },
        Assists:{
            type:String
        },
        CS:{
            type:String
        },
        KeyStoneRune:{
            type:String
        },
        Role:{
            type:String
        }
    }]
})

export default mongoose.model('gameModel', gameSchema,"games");