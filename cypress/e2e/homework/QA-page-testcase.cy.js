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

        cy.xpath("//input[@id='dateOfBirthInput']")
            .click()

       
        cy.xpath("//select[@class='react-datepicker__month-select']").select("June")    
        cy.xpath("//select[@class='react-datepicker__year-select']").select("1999")
        cy.xpath("//div[text()=17]").click()  

        cy.xpath("//label[@for='hobbies-checkbox-1']")
            .click()
        
        cy.xpath("//div[@class=' css-yk16xz-control']")
            .type("Haryana{enter}")

        cy.xpath("(//div[@class=' css-1hwfws3'])[2]")
            .type("Karnal{enter}")

        cy.xpath("//button[@id='submit']")
            .click()
    })

})