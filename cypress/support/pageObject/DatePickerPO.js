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

    getMonthName() {
        return cy.xpath("//span[@class='ui-datepicker-month']")
    }

    getYearName() {
        return cy.xpath("//span[@class='ui-datepicker-year']")
    }

    getDay() {
        return cy.xpath("//a[text()='12']")
    }
}

export default DatePickerPO