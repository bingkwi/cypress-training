import LoginPageObject from "../support/pageObject/LoginPageObject"

const loginPageObject = new LoginPageObject()

Cypress.Commands.add("testLogin", (email, password) => {
    loginPageObject.getEmailTextbox().type(email)
    loginPageObject.getPasswordTextbox().type(password)
    loginPageObject.clickLoginButton().click()
    loginPageObject.clickLogout().click()
})
