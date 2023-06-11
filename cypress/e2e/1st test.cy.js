/// <reference types="cypress" />

it('wejście na stronę fakestore.testelka', () => {
  cy.visit('/');;
  cy.url().should('contain', 'fakestore');
})