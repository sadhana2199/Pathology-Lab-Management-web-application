Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://gor-pathology.web.app/');
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
