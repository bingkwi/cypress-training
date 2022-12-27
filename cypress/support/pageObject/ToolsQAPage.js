class TotalsQAPage {
    getFirstNameInput() {
        return cy.xpath("//input[@id='firstName']")
    }

    getLastNameInput() {
        return cy.xpath("//input[@id='lastName']")
    }

    getEmailInput() {
        return cy.xpath("//input[@id='userEmail']")
    }

    getGenderRadioButton() {
        return cy.xpath("//label[@for='gender-radio-2']")
    }

    getUserNumberInput() {
        return cy.xpath("//input[@id='userNumber']")
    }

    getDobInput() {
        return cy.xpath("//input[@id='dateOfBirthInput']")
    }

    getMonthDropDown() {
        return cy.xpath("//select[@class='react-datepicker__month-select']")
    }

    getYearDropDown() {
        return cy.xpath("//select[@class='react-datepicker__year-select']")
    }

    getDayDropDown() {
        return cy.xpath("//div[text()=17]")
    }
    
    getHobbiesCheckbox() {
        return cy.xpath("//label[@for='hobbies-checkbox-1']")
    }

    getStateDropDown() {
        return cy.xpath("//div[@class=' css-yk16xz-control']")
    }

    getCityDropDown() {
        return cy.xpath("(//div[@class=' css-1hwfws3'])[2]")
    }

    getSubmitButton() {
        return cy.xpath("//button[@id='submit']")
    }

}

export default TotalsQAPage