import mongoose from 'mongoose';


const champSchema = new mongoose.Schema({
    name:{
        type:String
    },
    url:{
        type:String
    },
    BE:{
        type:String
    },
    RP:{
        type:String
    },
    Attributes:{
        type:String
    },
    KeyInteger:{
        type:String
    }
})

export default mongoose.model('champModel', champSchema,"champs");