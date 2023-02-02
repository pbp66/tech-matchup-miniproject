const { Tech, Matchup } = require("../models/index.js");

const resolvers = {
	Query: {
		tech: async (parent, args, context) => {
			return await Tech.findById(args.id);
		},
		techs: async () => {
			return await Tech.find({});
		},
		matchup: async (parent, args, context) => {
			return await Matchup.findById(args.id);
		},
		matchups: async () => {
			return await Matchup.find({});
		},
	},
	Mutation: {
		createMatchup: async (parent, { tech1, tech2, ...args }, context) => {
			return await Matchup.create({ tech1, tech2 });
		},
		createVote: async (parent, { id, techNum }, context) => {
			return await Matchup.findOneAndUpdate({ _id: id }, { techNum });
		},
	},
};

module.exports = resolvers;
