class LoginPageUI {
    getEmailTextbox(){
        return cy.xpath("//input[@name='login']")
    }
    
    getPasswordTextbox(){
        return cy.xpath("//input[@name='password']")
    }

    getLoginButton(){
        return cy.xpath("//input[@name='commit']")
    }
}

export default LoginPageUI