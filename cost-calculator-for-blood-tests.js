describe('Cost Calculator Tests', () => {
  beforeEach(() => {
    cy.login('test@kennect.io', 'Qwerty@1234');
  });

  it('should calculate the cost of selected blood tests', () => {
    cy.get('.calculator-button').click();
    cy.get('input[type="checkbox"][value="CBC"]').check();
    cy.get('input[type="checkbox"][value="LFT"]').check();
    cy.get('#discount').type('10');
    cy.get('#calculate-button').click();
    cy.get('#total-cost').should('contain', '$'); // Adjust currency format if needed
  });
});
