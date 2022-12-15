import LoginBoostPageObject from "../support/pageObject/LoginBoostPageObject"

describe("Test login from boost app", () => {
    const loginBoostPageObject = new LoginBoostPageObject()

    it('test login screen', function () {
    //    cy.login('cmctest@qa.team','Linh1993@')
    
    loginBoostPageObject.inputEmail("cmctest@qa.team")
    loginBoostPageObject.inputPassword("Linh1993@")
    loginBoostPageObject.clickLoginButton()
    })

})
