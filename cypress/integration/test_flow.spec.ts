// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Test flow', () => {
	beforeEach(() => {
		cy.log(`Visiting http://localhost:3040`);
		cy.visit('/');
	});

	it('should show Hello successfully', () => {
		cy.findByText('Hello');
	});
});