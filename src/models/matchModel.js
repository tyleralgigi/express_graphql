import mongoose from 'mongoose';


const matchSchema = new mongoose.Schema({
    MatchId:{
        type:String
    }, 
    OverviewPageId:{
        type: mongoose.Types.ObjectId,
        ref: 'overviewPageModel'
    },
    Team1:{
        type: mongoose.Types.ObjectId,
        ref: 'teamModel'
    },
    Team1Score:{
        type: String,
    },
    Team2:{
        type: mongoose.Types.ObjectId,
        ref: 'teamModel'
    },
    Team2Score:{
        type: String,
    },
    BestOf:{
        type:String
    
    },
    DateTime_UTC:{
        type:String
    },
    Winner:{
        type:String
    },
    Tab:{
        type:String
    }
    
})

export default mongoose.model('matchModel', matchSchema, "matches");