class DatePickerPO {
    getDatePicker() {
        return cy.xpath("//input[@id='datepicker1']")
    }

    getCalendar() {
        return cy.xpath("//div[@id='ui-datepicker-div']")
    }

    getNavigateBack() {
        return cy.xpath("//span[text()='Prev']")
    }

    getNavigateForward() {
        return cy.xpath("//span[text()='Next']")
    }

    getCurrentYear() {
        return cy.xpath("//span[@class='ui-datepicker-year']")
    }

    getDay(day) {
        return cy.xpath("//a[text()=" + day +"]")
    }
}

export default DatePickerPO