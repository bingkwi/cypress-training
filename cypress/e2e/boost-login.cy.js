import LoginPageObject from "../support/pageObject/LoginPageObject"

describe("Test login from boost app", () => {
    const loginPageObject = new LoginPageObject()

    it('test login screen', function () {
        //cy.login('bingkwi','matkhaugit01')
        cy.visit('https://github.com/login')
        loginPageObject.inputEmail("bingkwi")
        loginPageObject.inputPassword("matkhaugit01")
        loginPageObject.clickLoginButton()
    })

})
