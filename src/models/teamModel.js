import mongoose from 'mongoose';


const teamSchema = new mongoose.Schema({
    
    image: {
        type: String,
    },
    name: {
        type: String
    }, 
    shortName: {
        type: String
    },
    region:{
        type: String
    },
    Players:{
        type: mongoose.Types.ObjectId,
        ref:'playersModel'
    }
})

export default mongoose.model('teamModel', teamSchema,"teams");