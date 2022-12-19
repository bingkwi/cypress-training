describe("Test login from boost app", () => {
    beforeEach(()=> {
        cy.visit('https://sb-merchant.boostbusiness.my/auth/login')
    })

    it.only('test login screen successfully',() =>{ 
        cy.testLogin('cmctest@qa.team','Linh1993@')
        cy.log("test 1: passed")
        
    
    })



    
})
