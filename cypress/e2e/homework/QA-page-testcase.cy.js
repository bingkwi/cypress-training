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

        cy.xpath("//input[@id='firstName']")
            .clear()
            .should("be.empty")
            .type("pinky")

        cy.xpath("//input[@id='lastName']")
            .clear()
            .should("be.empty")
            .type("truan")

        cy.xpath("//input[@id='userEmail']")
            .type("pinky@go.vn")

        cy.xpath("//label[@for='gender-radio-2']")
            .click()

        cy.xpath("//input[@id='userNumber']")
            .clear()
            .should("be.empty")
            .type("0914445212")

        // cy.xpath("//input[@id='dateOfBirthInput']")
        //     .clear()
        //     .
        
        //cy.xpath("")

        cy.xpath("//label[@for='hobbies-checkbox-1']")
            .click()
        
        cy.xpath("//div[@class=' css-yk16xz-control']")
            .type("NCR{enter}")

        cy.xpath("(//div[@class=' css-1hwfws3'])[2]")
            .type("Delhi{enter}")

        cy.xpath("//button[@id='submit']")
            .click()
    })

})