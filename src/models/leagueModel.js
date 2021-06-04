import mongoose from 'mongoose';


const leagueSchema = new mongoose.Schema({
    nameAbbr: String,
    nameFull: String, 
    currentEventId: mongoose.Types.ObjectId, 
    currentOverviewPage: String
})

export default mongoose.model('leagueModel', leagueSchema,"leagues");