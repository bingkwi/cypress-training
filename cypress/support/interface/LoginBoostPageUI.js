class LoginBoostPageUI {
    getEmailTextbox(){
        return cy.xpath("//input[@autocomplete='email']")
    }
    
    getPasswordTextbox(){
        return cy.xpath("//input[@autocomplete='current-password']")
    }

    getLoginButton(){
        return cy.xpath("//button[text()= 'Login']")
    }
}

export default LoginBoostPageUI