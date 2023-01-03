class LoginUI {
    getLoginButton() {
        return cy.xpath("//a[text()='Log in']")
    }

    getEmailTextBox() {
        return cy.xpath("//input[@name='Email']")
    }

    getPasswordInput() {
        return cy.xpath("//input[@name='Password']")
    }
  
    getLogin() {
        return cy.xpath("//button[text()='Log in']")
    }
}

export default LoginUI