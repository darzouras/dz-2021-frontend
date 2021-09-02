describe('The Home Page', () => {
  /* it('API fetched', () => {
    cy.request(Cypress.env('api_url') + '/home')
  }) */

  it('succesfully loads', () => {
    cy.visit('/')
    cy.wait(1000) // without waiting it does not catch the Failure to fetch
  })
})
