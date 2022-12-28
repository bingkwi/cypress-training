class RegisterUI {
    getRegisterButton() {
        //return cy.xpath("//a[text()='Register']")
        return cy.xpath("//button[text()='Register']")
    }

    getGenderRadio() {
        return cy.xpath("//label[@for='gender-female']")
    }

    getFirstNameTextbox() {
        return cy.xpath("//input[@name='FirstName']")
    }

    getLastNameTextbox() {
        return cy.xpath("//input[@name='LastName']")
    }

    getDayDropDown() {
        return cy.xpath("//select[@name='DateOfBirthDay']")
    }

    getMonthDropDown() {
        return cy.xpath("//select[@name='DateOfBirthMonth']")
    }

    getYearDropDown() {
        return cy.xpath("//select[@name='DateOfBirthYear']")
    }

    getEmailTextBox() {
        return cy.xpath("//input[@name='Email']")
    }

    getCompanyNameTextbox() {
        return cy.xpath("//input[@name='Company']")
    }

    getPasswordInput() {
        return cy.xpath("//input[@name='Password']")
    }

    getConfirmPasswordInput() {
        return cy.xpath("//input[@name='ConfirmPassword']")
    }

    getContinueButton() {
        return cy.xpath("//a[text()='Continue']")
    }

    getLoginButton() {
        return cy.xpath("//a[text()='Log in']")
    }
}

export default RegisterUI