import TotalsQAPage from "../../../support/pageObject/ToolsQAPage";

const practiceForm = new TotalsQAPage()
describe("Practice get element selector", () => {

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit("https://demoqa.com",{failOnStatusCode:false})
    });

    it('should submit successfully', () => {

        cy.xpath("//div[@class='card mt-4 top-card'][2]")
            .click()

        cy.xpath("//div[@class='element-list collapse show']")
            .click()

        practiceForm.getFirstNameInput()
            .type("pinky")

        practiceForm.getLastNameInput()
            .type("truan")

        practiceForm.getEmailInput()
            .type("pinky@go.vn")

        practiceForm.getGenderRadioButton()
            .click()

        practiceForm.getUserNumberInput()
            .clear()
            .should("be.empty")
            .type("0914445212")
        
        practiceForm.getDobInput()
            .click()

        practiceForm.getMonthDropDown().select("June")    
        practiceForm.getYearDropDown().select("1999")
        practiceForm.getDayDropDown().click()  
        
        practiceForm.getHobbiesCheckbox().click()
               
        practiceForm.getStateDropDown().type("Haryana{enter}")

        
        practiceForm.getCityDropDown().type("Karnal{enter}")

        practiceForm.getSubmitButton()
            .click()
    })

})