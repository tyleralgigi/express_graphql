import { League, overviewPage, match, team, game, player, champ, TeamPlayer } from "./models"


export const resolvers = {
    Query:{
        hello: () => "hello",
        leagues: (root, args, context, info) => {
            //TODO: pagination
            return League.find({})
        },
        league: (root, {name}, context, info) => {
            return League.findOne({nameAbbr: name})
        },
        overviewPages: (root, args, context, info) => {
            //TODO: pagination
            return overviewPage.find({})
        },
        matches: async (root, {MatchId}, context, info) => {
            return match.find({MatchId: MatchId})
        },
        findPlayer: async (root, {name}, context, info) => {
            return player.find({summonerName: name})
        },
    },

    //For models
    league:{
        currentId: async (league, args, context, info) => {
            return (await league.populate('currentId').execPopulate()).currentId
        }
    },
    overviewPage:{
        matches: async (overviewPages, args, context, info) => {
            return match.find({OverviewPageId: overviewPages.id})
        }
    },
    match:{
        Team1: async (match, args, context, info) => {
            return team.findById(match.Team1)
        },
        Team2: async (match, args, context, info) => {
            return team.findById(match.Team2)
        },
        games: async (match, args, context, info) => {
            return game.find({MatchId: match.MatchId})
        }
    },
    game:{
        Team1Bans: async (game, args, context, info) => {
            return (await game.populate('Team1Bans').execPopulate()).Team1Bans
        },
        Team2Bans: async (game, args, context, info) => {
            return (await game.populate('Team2Bans').execPopulate()).Team2Bans
        },
        Team1Players: async (game, args, context, info) => {
            return (await game
                .populate('Team1Players.Champ')
                .populate('Team1Players.playerID')
                
                .execPopulate()).Team1Players
        },
        Team2Players: async (game, args, context, info) => {
            return (await game
                .populate('Team2Players.Champ')
                .populate('Team2Players.playerID')
                
                .execPopulate()).Team2Players
        }
    },


}