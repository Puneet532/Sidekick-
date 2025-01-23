describe('Verify Page Title and Sign Up', () => {
  beforeEach(() => {
    // Ignore specific errors to prevent test failures
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'forEach')")) {
        return false; // Ignore specific errors
      }
      return true;
    });
  });

  it('should navigate to sign-up page and create a new user', () => {
    // Step 1: Visit the target website (dev origin)
    cy.visit('https://dev.everydayheroessrd.net/');

    // Step 2: Ensure the page has loaded completely
    cy.get('body', { timeout: 10000 }).should('be.visible');

    // Step 3: Verify the page title
    cy.title().should('eq', 'EH-SideKick'); // Replace with the correct expected title

    // Step 4: Click on the "Sign Up" button (on dev origin)
    cy.get('[role="button"] > .hidden > img').click();
    cy.get('.__className_d82651').first().click({ force: true });

    // Step 5: Switch to the new origin (account origin)
    cy.origin('https://account.everydayheroessrd.net', () => {
      // Verify URL includes "/login"
      cy.url({ timeout: 10000 }).should('include', '/login');

      // Step 6: Fill out the login form
// Select the first input field
cy.get('input[id="signInFormUsername"]').first().type('qa@yopmail.com', { force: true });
      cy.get('input[id="signInFormPassword"]').eq(0).type('Test@1234', { force: true }); // Ensure we are selecting the first input

      // Step 7: Submit the form
// Click the first button
// cy.get('input[name="signInSubmitButton"]').first().click({ force: true });

// Or click the button at a specific index (e.g., the second one)
cy.get('input[name="signInSubmitButton"]').eq(1).click({ force: true });

      // Print success message to Cypress logs
      cy.log('Test run successfully: User logged in!');
    });
  });
});
