describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('div.a4bIc > input').type("hai ba con mực, anh yêu em cực")
    cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.lJ9FBc > center > input.gNO89b").click()
    cy.get('#rcnt > div.XqFnDf > div > div > div.HdbW6.MjUjnf.VM6qJ > div.hHq9Z > div > div > div > div > div > div.PyJv1b.gsmt.PZPZlf > span').should('have.text', "Minh")
  })
})