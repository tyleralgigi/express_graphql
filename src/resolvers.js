import { League } from "./models"

export const resolvers = {
    Query:{
        hello: () => "hello",
        leagues: (root, args, context, info) =>{
            //TODO: pagination
            return League.find({})
        },
        league: (root, {name}, context, info) =>{
            return League.findOne({nameAbbr: name})
        }
      }
}