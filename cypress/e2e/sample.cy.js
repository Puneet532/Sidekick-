describe('Verify Page Title', () => {
    it('should display the correct title', () => {
        
        // Step 1: Visit the target website
        // Navigate to the specified URL to begin the test
        cy.visit('https://dev.everydayheroessrd.net/');
        
        // Step 2: Ensure the page has loaded completely
        // Verify that the <body> element is visible to confirm the page has rendered
        cy.get('body', { timeout: 10000 }).should('be.visible');
        
         // Step 3: Verify the page title
        // Check that the title of the page matches the expected value
        cy.title().should('eq', 'EH-SideKick'); // 
    });
});
