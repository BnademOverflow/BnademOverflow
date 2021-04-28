module.exports = {
	moduleDirectories: ['node_modules', '__tests__', 'src'],
	modulePathIgnorePatterns: ['cypress', '__tests__/test-utils.tsx'],
	setupFiles: ['./setupTests.ts'],
};