import mongoose from 'mongoose';


const leagueSchema = new mongoose.Schema({
    nameAbbr: {
        type: String,
    },
    nameFull: {
        type: String
    }, 
    currentId: {
        type:mongoose.Types.ObjectId,
        ref: 'overviewPageModel'
    }
})

export default mongoose.model('leagueModel', leagueSchema,"leagues");