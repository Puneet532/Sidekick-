describe('Verify Page Title and Login', () => {
    it('should display the correct title, click login, and log in with valid credentials', () => {
  
      // Step 1: Visit the target website
      // Navigate to the specified URL to begin the test
      cy.visit('https://dev.everydayheroessrd.net/');
  
      // Step 2: Ensure the page has loaded completely
      // Verify that the <body> element is visible to confirm the page has rendered
      cy.get('body', { timeout: 10000 }).should('be.visible');
  
      // Step 3: Verify the page title
      // Check that the title of the page matches the expected value
      cy.title().should('eq', 'EH-SideKick'); // Replace with the correct expected title
  
      // Step 4: Click on the "Login" button
      // Assuming the "Login" button has a class or text identifier
      cy.contains('Login').click(); // Or cy.get('.login-button').click();
  
      // Step 5: Fill out the login form
      // Assuming the form has fields for username/email and password
      cy.get('input[name="username"]').type('existingUser');  // Replace with valid username or email
      cy.get('input[name="password"]').type('password123');   // Replace with valid password
  
      // Step 6: Submit the login form
      // Assuming the submit button has a class or text identifier
      cy.contains('Log In').click(); // Or cy.get('.submit-button').click();
  
      // Step 7: Verify that the user is logged in
      // Check for a user-specific element, like a greeting message or dashboard link
      cy.contains('Welcome, existingUser').should('be.visible'); // Adjust based on the actual logged-in message
    });
  });
  