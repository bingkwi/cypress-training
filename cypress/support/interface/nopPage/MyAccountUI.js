class MyAccountUI {
    getMyAccountButton() {
        return cy.xpath("//a[@class='ico-account']")
    }

    getFirstNameTextbox() {
        return cy.xpath("//input[@name='FirstName']")
    }

    getLastNameTextbox() {
        return cy.xpath("//input[@name='LastName']")
    }

    getEmailTextBox() {
        return cy.xpath("//input[@name='Email']")
    }
}

export default MyAccountUI