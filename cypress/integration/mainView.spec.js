describe('Main view', () => {
  it('validate home page renders and we can type', () => {
    cy.visit('/');
    cy.get('[data-cy=nav-button]').should('be.visible');
    cy.get('[data-cy=codemirror]').should('be.visible');
    cy.get('[data-cy=swagger-ui]').should('be.visible');
    cy.get('.CodeMirror-code').type(`/**
 * GET /api/v1
* @summary
*/`);
  });
});
