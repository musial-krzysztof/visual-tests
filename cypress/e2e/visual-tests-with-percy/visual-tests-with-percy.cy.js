/// <reference types="cypress" />  

  describe('Percy tests vs CSS assertions in Cypress', () => {

    beforeEach(() => {
      cy.visit('')
    })

    it('Percy tests', () => {
      cy.get('[data-testid="newTaskButton"]').should('be.visible').click()
      cy.get('[data-testid="taskTitleInput"]').should('be.visible').type('First task')
      cy.get('[data-testid="taskSummaryInput"]').should('be.visible').type('Summary for First task')
      cy.get('[data-testid="taskSummaryInput"]').should('be.visible').click()
    })

    it.only('CSS assertions in Cypress', () => {
      cy.get('[data-testid="newTaskButton"]').should('be.visible')
        .and('contain', 'New Task')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-weight', '600')
        .and('have.css', 'background-color', 'rgb(34, 139, 230)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
    })
  })