describe('Login Page Tests', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input[name="email"]').type('test@kennect.io');
    cy.get('input[name="password"]').type('Qwerty@1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home'); 
  });

  it('should display error for invalid credentials', () => {
    cy.visit('https://gor-pathology.web.app/');
    cy.get('input[name="email"]').type('wrong@user.com');
    cy.get('input[name="password"]').type('wrongPassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
});
