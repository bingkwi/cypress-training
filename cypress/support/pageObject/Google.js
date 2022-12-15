class Google {
    getSearchTextbox(){
        cy.get('input[name="q"]').should('be.empty').type('Christmas{enter}');
        //verify result
  
        //have keyword Google
        cy.get('h3').should('include.text',"Christmas");

    }
}

export default Google