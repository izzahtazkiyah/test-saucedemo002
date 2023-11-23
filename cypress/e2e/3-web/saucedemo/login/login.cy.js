const userData = require('../../../fixtures/userData.json')

describe('Verify Saucedemo Login Functionlity', () => {
  it('Failed Login - Locked User', () => {
    cy.visit('')
    cy.get('#user-name').type(Cypress.env('lockedUser'))
    cy.get('[data-test="password"]').type(userData.valid.valid_password)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })
  it('Failed Login - Wrong password', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type(userData.invalid.invalid_pass)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user')
  })
  it('Success Login', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.url().should('include', '/inventory.html')
  })
  it('Failed Login - Wrong creds CUSTOM COMMAND', () => {
    cy.visit('')
    cy.login('elvanisa','QAengineer')
    cy.verifyContain('[data-test="error"]', 'Username and password do not match')
  })
})