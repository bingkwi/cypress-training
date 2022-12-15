import Google from "../support/pageObject/Google"

describe('Test case search keyword in Google and verify result', () => {
  const google = new Google()
  beforeEach (() => {
      cy.visit('https://www.google.com')
  })

  it('Search an random keyword (Google)', () => {
      google.getSearchTextbox()
      
  })
})