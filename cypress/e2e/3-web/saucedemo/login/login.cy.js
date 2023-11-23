describe('Verify Saucedemo Login Functionality', () => {
  it('Failed Login - Locked user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })
})