import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Query{
        hello: String!
        leagues: [league]
        league(name: String!): league
    },

    type league{
        nameAbbr: String,
        nameFull: String, 
        currentEventId: ID, 
        currentOverviewPage: String
    }
`