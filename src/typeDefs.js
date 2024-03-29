import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query{
        leagues: [league]
        league(name: String!): league
        overviewPages: [overviewPage]
        #TODO: add query to get games from matchId
        matches(MatchId: String!): [match]
        findPlayer(summonerName: String!):player
        getTeams: [Team]
        login(email: String!, password: String!): AuthData!
    }

    type AuthData{
        userId: ID!,
        token: String!,
        tokenExpiration: Int
    }

    type user{
        _id: ID!,
        firstName: String!,
        lastName: String!,
        emial: String!,
        password: String,
        favoriteTeams: [Team]
    }

    input userInput {
        firstName: String!,
        lastName: String!,
        email: String!,
        password: String!,
    }


    type Mutation{
        createUser(userInput: userInput): user
        addFavoriteTeam(teamId: ID, userId: ID): user
        removeFavoriteTeam(teamId: ID, userId: ID): user
    }

    type league{
        nameAbbr: String,
        nameFull: String, 
        currentId: overviewPage, 
    }

    type overviewPage{
        name: String,
        overviewPage: String,
        type: String,
        Split: String,
        Event: String,
        StandardName: String,
        IsQualifer: String,
        IsPlayoffs: String,
        IsOfficial: String,
        Year: String
        matches(status: String): [match]
    }

    type match{
        MatchId: String,
        OverviewPageId: overviewPage
        Team1: Team
        Team1Score: String,
        Team2: Team,
        Team2Score: String,
        BestOf: String,
        DateTime_UTC: String,
        Winner: String,
        Tab: String
        games: [game]
        status: String
    }

    type game{
        Team1Bans:[champ]
        Team2Bans: [champ]
        Team1Dragons: String,
        Team1Inhibitors: String,
        Team1Barons: String,
        Team1RiftHeralds: String,
        Team1Towers: String,
        Team2Dragons: String,
        Team2Inhibitors: String,
        Team2Barons: String,
        Team2RiftHeralds: String,
        Team2Towers: String,
        Gamename: String,
        DateTime_UTC: String,
        VOD: String
        MatchId: String,
        Team1: Team,
        Team2: Team,
        Team1Score: String,
        Team2Score: String,
        Winner: String,
        Team1Players: [TeamPlayerObj],
        Team2Players: [TeamPlayerObj],
    }

    type TeamPlayerObj{
        playerID: player
        Champ: champ
        Kills: String
        Deaths: String
        Assists: String
        CS: String
        KeyStoneRune: String
        Role: String
    }

    type champ{
        name: String,
        url: String,
        BE: String,
        RP: String,
        Attributes: String,
        KeyInteger: String
    }

    type player{
        fullName: String
        role: String
        summonerName: String
        image: String
        team: String
    }

    type Team{
        _id: ID
        image: String,
        name: String,
        shortName: String,
        Region: String
    }


`