import mongoose from 'mongoose';


const overviewPageSchema = new mongoose.Schema({
    name:{
        type:String
    }, 
    overviewPage:{
        type:String
    }, 
    type:{
        type:String
    }, 
    Split:{
        type:String
    },
    Event:{
        type:String
    },
    StandardName:{
        type:String
    },
    IsQualifer:{
        type:String
    },
    IsPlayoffs:{
        type:String
    },
    IsOfficial:{
        type:String
    },
    Year:{
        type:String
    },
    matches:[{
        type: mongoose.Types.ObjectId,
        ref: 'matchesModel'
    }]
})

export default mongoose.model('overviewPageModel', overviewPageSchema, "overviewPage");