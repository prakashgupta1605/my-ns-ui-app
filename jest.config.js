// eslint-disable-next-line no-undef
module.exports = {
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
		},
	},
	moduleFileExtensions: ["ts", "js", "tsx"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	roots: ["test"],
	testMatch: ["**/*.test.(ts|js)"],
	moduleNameMapper: {
		"^src/ts/(.*)$": "<rootDir>/src/ts/$1",
		"redux-toolkit": ["<rootDir>/node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.development"],
	},
	testResultsProcessor: "jest-teamcity-reporter",
	coverageReporters: ["text"],
};
