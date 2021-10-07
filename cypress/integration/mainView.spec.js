describe('Main view', () => {
  beforeEach(() => {
    cy.intercept('/api/v1/process-openapi', { fixture: 'openapi.json' }).as('processOpenapi');
  });
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
  it('validate process openapi request', () => {
    cy.get('[data-cy=nav-button]').click();
    cy.wait('@processOpenapi');
    cy.get('.swagger-ui').should('be.visible');
  });
  it('Should show notification when openapi request fail', () => {
    cy.intercept('/api/v1/process-openapi', { statusCode: 400, fixture: 'openapi_error.json' }).as('processOpenapiError');
    cy.get('[data-cy=nav-button]').click();
    cy.wait('@processOpenapiError');
    cy.get('.vue-notification-template').should('be.visible');
  });
});
