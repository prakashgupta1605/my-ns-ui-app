/* eslint-disable @ns-ui/forbid-disable-eslint */
// eslint-disable-next-line no-undef
module.exports = {
	beforePublishToOci: async () => {
		console.log("custom beforePublishToOci (empty) hook.");
	},
	beforePushToComponentExchange: async () => {
		console.log("custom beforePushToComponentExchange (empty) hook");
	},
	beforeDetectAppProblems: async () => {
		console.log("custom beforeDetectAppProblems (empty) hook");
	},
};
