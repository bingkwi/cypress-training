import DatePickerPO from "../../../support/pageObject/DatePickerPO"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe("datepicker demo", () => {
    const datepickerPO = new DatePickerPO()
    const currentYear = new Date().getFullYear()
    const year = 2012
    const month = 12
    const day = 12
    //const nextYear = 2024

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
    })

    it.only("choose the previous year", () => {
        datepickerPO.getDatePicker().click()

        for (let index = 0; index < 12 * (currentYear - year) + (12 - month); index++) {
            datepickerPO.getNavigateBack().click()

        }

        datepickerPO.getDay(day).click()
    })

    


})