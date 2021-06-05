import mongoose from 'mongoose';

const TeamPlayerSchema = new mongoose.Schema({
    
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
    
})

export default mongoose.model('TeamPlayerModel', TeamPlayerSchema,);