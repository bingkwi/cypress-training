import DatePickerPO from "../../../support/pageObject/DatePickerPO"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe("datepicker demo", () => {
    const datepickerPO = new DatePickerPO()
    const currentYear = 2022
    const year = 2018
    const month = 12

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
    })

    it("choose date of birth", () => {
        datepickerPO.getDatePicker().click()

        for (let index = 0; index < 12 * (currentYear - year) + (12 - month); index++) {
            datepickerPO.getNavigateBack().click()

        }

        datepickerPO.getDay().click()
    })



})