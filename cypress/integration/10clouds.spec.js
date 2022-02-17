describe('The 10 clouds web page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('a', 'Careers').should('have.attr', 'href', '/careers/').click() // clicks the careers tab
        cy.url().should('contain', 'careers')
    });

    it('Verify that there is exactly 1 QA Automation role open', () => {
        const availablePositions = []
        cy.get('.job-offer__title').each($jobOffer => {
            availablePositions.push($jobOffer.text())
        }).then(() => {
            const qaAutomationPositions = availablePositions.filter(position => position.includes('QA Automation Engineer'))
            expect(qaAutomationPositions).to.have.lengthOf(1) // This fails, as there are currently 3 roles open
        }) 
    });

    it('Browses offers for QA department and checks that each position contains either "QA Automation" or "QA Engineer"', () => {
        // cy.get('.select--mobile').first().select('QA', {force: true}) // alternative implementation - would need to use force:true as cypress detects element as being hidden
        cy.contains('button', 'departments').click() // clicks to open departments dropdown
        cy.contains('li', 'QA').click() // Selects the QA department
        cy.get('.job-offer__title').each($jobOffer => {
            cy.wrap($jobOffer.text()).as('jobTitle')
            cy.get('@jobTitle').should('match', /QA Automation|QA Engineer/g)
        })
    });
});