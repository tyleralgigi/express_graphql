import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Query{
        hello: String!
        leagues: [league]
        league(name: String!): league
        overviewPages: [overviewPage]
        #TODO: add query to get games from matchId
        matches(MatchId: String!):[match]
    },

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
        matches: [match]
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
        champ: champ
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
        image: String,
        name: String,
        shortName: String,
        Region: String
    }


`