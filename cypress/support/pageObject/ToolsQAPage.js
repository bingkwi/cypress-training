class TotalsQAPage {
    elements = {
     
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName)
    }

    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName)
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    clickGender() {
        this.elements.genderBtn().click();
    }

    typePhoneNumber(phoneNumber) {
        this.elements.phoneInput().type(phoneNumber)
    }

    typeDob(dob) {
        this.elements.dobInput().type(dob)
    }

    clickSubmit() {
        this.elements.submitBtn().click();
    }
}

export default TotalsQAPage