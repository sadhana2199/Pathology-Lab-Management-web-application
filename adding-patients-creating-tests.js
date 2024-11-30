describe('Patient Management Tests', () => {
  beforeEach(() => {
    cy.login('test@kennect.io', 'Qwerty@1234');
  });

  it('should add a new patient and create a test request', () => {
    cy.get('.add-patient-button').click();
    cy.get('input[name="patientName"]').type('John Doe');
    cy.get('input[name="patientAge"]').type('30');
    cy.get('input[name="patientGender"]').select('Male');
    cy.get('button[type="submit"]').click();
    cy.get('.todo-list').should('contain', 'John Doe');
  });
});
