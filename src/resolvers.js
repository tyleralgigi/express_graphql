import {SECRET} from "./constants";
import {
    game,
    League,
    match,
    overviewPage,
    player,
    team,
    user
} from "./models";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export const resolvers = {
    Query: {
        leagues: (root, args, context, info) => { // TODO: pagination
            return League.find({})
        },
        league: (root, {
            name
        }, context, info) => {
            return League.findOne({nameAbbr: name})
        },
        overviewPages: (root, args, context, info) => { // TODO: pagination
            return overviewPage.find({})
        },
        matches: async (root, {
            MatchId
        }, context, info) => {
            return match.find({MatchId: MatchId})

        },
        findPlayer: async (_, {
            name
        }, {req, res}) => {
            return player.find({summonerName: name})
        },
        getTeams: async (root, args, context, info) => {
            return team.find({})
        },

        login: async (root, {
            email,
            password
        }, {
            req,
            res
        }, info) => {
            const User = await user.findOne({email: email});
            if (! User) {
                throw new Error("User doesnt exist")
            }
            const isEqual = await bcrypt.compare(password, User.password);
            if (! isEqual) {
                throw new Error("Password incorrect")
            }
            const token = jwt.sign({
                userId: User.id,
                email: email
            }, SECRET);

            res.cookie('token', token)

            return {userId: User.id, token: token}
        }


    },
    Mutation: {
        createUser: async (root, args, context, info) => {
            return user.findOne({email: args.userInput.email}).then(User => {
                if (User) {
                    throw new Error('User already using email')
                }
                return bcrypt.hash(args.userInput.password, 12)
            }).then(hashedPassword => {
                const User = new user({firstName: args.userInput.firstName, lastName: args.userInput.lastName, email: args.userInput.email, password: hashedPassword})
                return User.save();
            }).then(result => {
                return {
                    ...result._doc,
                    password: null,
                    _id: result.id
                };
            }).catch(err => {
                console.log(err)
                throw err;
            });


        },
        addFavoriteTeam: async (_, args, {req}) => {
            if (!req.userId) {
                throw new Error('Unauthenicated');
            }
            try {
                return new Promise(function (resolve, reject) {
                    user.findById(args.userId, function (err, user) {
                        if (err) {
                            reject(err);
                        } else {
                            user.favoriteTeams.push(args.teamId);
                            user.save().then((result) => {
                                resolve(result)
                            }).catch((err) => {
                                reject(err)
                            });
                        }
                    }).catch((err) => {
                        reject(err)
                    });
                });

            } catch (err) {
                throw err;
            }
        },
        removeFavoriteTeam: async (_, args, {req}) => {
            if (!req.userId) {
                throw new Error('Unauthenicated');
            }
            try {
                return new Promise(function (resolve, reject) {
                    user.findById(args.userId, function (err, user) {
                        if (err) {
                            reject(err);
                        } else {
                            user.favoriteTeams.pop(args.teamId);
                            user.save().then((result) => {
                                resolve(result)
                            }).catch((err) => {
                                reject(err)
                            });
                        }
                    }).catch((err) => {
                        reject(err)
                    });
                });

            } catch (err) {
                throw err;
            }
        }
    },
    // For models
    user: {
        favoriteTeams: async (user, args, context, info) => {
            return(await user.populate('favoriteTeams').execPopulate()).favoriteTeams
        }
    },

    league: {
        currentId: async (league, args, context, info) => {
            return(await league.populate('currentId').execPopulate()).currentId
        }
    },
    overviewPage: {
        matches: async (overviewPages, {
            status
        }, context, info) => {
            if (status != null) {
                return match.find({OverviewPageId: overviewPages.id, status: status}).sort('DateTime_UTC')
            } else {
                return match.find({OverviewPageId: overviewPages.id}).sort('DateTime_UTC')
            }

        }
    },
    match: {
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
    game: {
        Team1Bans: async (game, args, context, info) => {
            return(await game.populate('Team1Bans').execPopulate()).Team1Bans
        },
        Team2Bans: async (game, args, context, info) => {
            return(await game.populate('Team2Bans').execPopulate()).Team2Bans
        },
        Team1Players: async (game, args, context, info) => {
            return(await game.populate('Team1Players.Champ').populate('Team1Players.playerID').execPopulate()).Team1Players
        },
        Team2Players: async (game, args, context, info) => {
            return(await game.populate('Team2Players.Champ').populate('Team2Players.playerID').execPopulate()).Team2Players
        }
    }


}
