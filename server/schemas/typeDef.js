const typeDefs = `
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
		matchups: [Matchup]
	}

	type Mutation {
		createMatchup(tech1: String!, tech2: String!): Matchup
		createVote(id: String!, techNum: Int!): Matchup
		#updateVote?
	}
`;

module.exports = typeDefs;
