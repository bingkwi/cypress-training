import RegisterUI from "../../../support/interface/nopPage/RegisterUI";


describe("register and login",() => {
    const registerUI = new RegisterUI()
    
    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F",{failOnStatusCode:false})
    });
    
    it("register", () => {
        registerUI.getRegisterButton().click()
        registerUI.getGenderRadio().click()
        registerUI.getFirstNameTextbox().type("quynh")
        registerUI.getLastNameTextbox().type("bich")
        registerUI.getDayDropDown().select("2")
        registerUI.getMonthDropDown().select("January")
        registerUI.getYearDropDown().select("1924")
        registerUI.getEmailTextBox().type("q@gmail.com")
        registerUI.getPasswordInput().type("122123")
        registerUI.getConfirmPasswordInput().type("122123")
        registerUI.getRegisterButton().click()
    })

    it("login", () => {
        registerUI.getLoginButton().click()
        registerUI.getEmailTextBox().type("q@gmail.com")
        registerUI.getPasswordInput().type("122123")
        registerUI.getLoginButton().click()
    })
})