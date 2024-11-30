describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.login('test@kennect.io', 'Qwerty@1234'); // Use a custom command for login
  });

  it('should display the todos list', () => {
    cy.get('.todo-list').should('be.visible');
  });
});
