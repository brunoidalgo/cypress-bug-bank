import pages from "../fixtures/pages.json"
import users from "../fixtures/users.json"

Cypress.Commands.add("login", () => {
    cy.visit(pages.homepage)
    cy.xpath('(//input[@placeholder="Informe seu e-mail"])[1]').type(users.brunoempke.login)
    cy.xpath('(//input[@placeholder="Informe sua senha"])[1]').type(users.brunoempke.password)
    cy.xpath('(//button[@type="submit"])[1]').click()
})