import { Tech, Matchup } from "../models/index.js";

export default resolvers = {
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
	Mutation: {},
};
