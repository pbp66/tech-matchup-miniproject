const { gql } = require("apollo-server-express");

export default typeDefs = gql`
type Tech {
    _id: ID!
    name: String!
}

type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
}

type Query {
    tech(id: ID!): Tech
    techs: [Tech]
    matchup(id: ID!): Matchup
    matchups: [MatchUp]
}

type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    #updateVote?
}

`;
