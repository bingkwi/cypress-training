class LoginPageObject {
    // inputEmail(email){
    //     return loginPageUI.getEmailTextbox().type(email)
    // }
    // inputPassword(password){
    //     return loginPageUI.getPasswordTextbox().type(password);
    // }
    // clickLoginButton(){
    //     return loginPageUI.getLoginButton().click()
    // }
    getEmailTextbox(){
        return cy.xpath("//input[@autocomplete='email']")
    }

    getPasswordTextbox(){
        return cy.xpath("//input[@autocomplete='current-password']")
    }

    clickLoginButton(){
        return cy.xpath("//*[text()='Login']")
    }

    clickLogout() {
        return cy.xpath("//*[text()='Logout']")
    }
}

export default LoginPageObject