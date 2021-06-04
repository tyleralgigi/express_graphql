import { League, overviewPage, match, team } from "./models"


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
    },
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
    }
}