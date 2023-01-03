import RegisterUI from "../../../support/interface/nopPage/RegisterUI";
import LoginUI from "../../../support/interface/nopPage/LoginUI";
import MyAccountUI from "../../../support/interface/nopPage/MyAccountUI";


describe("register and login", () => {
    const registerUI = new RegisterUI()
    const loginUI = new LoginUI()
    const myAccUI = new MyAccountUI()

    beforeEach(() => {
        cy.viewport(1920, 1080)     
    });

    let firstName = "pinky"
    let lastName = "bich"
    let email = "pinky." + Math.random() + '@gmail.com'
    let password = "122123"

    it("register", () => {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F", { failOnStatusCode: false })
        registerUI.getRegisterButton().click()
        registerUI.getGenderRadio().click()
        registerUI.getFirstNameTextbox().type(firstName)
        registerUI.getLastNameTextbox().type(lastName)
        registerUI.getDayDropDown().select("2")
        registerUI.getMonthDropDown().select("January")
        registerUI.getYearDropDown().select("1924")
        registerUI.getEmailTextBox().type(email)
        //cy.writeFile("D:\work\project\cypress-training\cypress\e2e\homework\NopCommerce\emailRandom.txt", "a")
        registerUI.getPasswordInput().type(password)
        registerUI.getConfirmPasswordInput().type(password)
        registerUI.getRegisterButton().click()
        registerUI.getResultSuccessfully().should("have.text","Your registration completed")
    })

    it("login and verify acc", () => {
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F", { failOnStatusCode: false })
        loginUI.getLoginButton().click()
        loginUI.getEmailTextBox().type(email)
        loginUI.getPasswordInput().type(password)
        loginUI.getLogin().click()
        cy.wait(5000)

        myAccUI.getMyAccountButton().click()
        myAccUI.getFirstNameTextbox().should('have.value',firstName)
        myAccUI.getLastNameTextbox().should('have.value',lastName)
        myAccUI.getEmailTextBox().should('have.value',email)
    })
})