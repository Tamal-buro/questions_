describe('Flipkart Login Test', () => {
    it('should log in to Flipkart successfully', () => {
        // Visit Flipkart website
        cy.visit('https://www.flipkart.com');

        // Close the initial login popup if it appears
        cy.get('body').then(($body) => {
            if ($body.find('._2KpZ6l._2doB4z').length > 0) {
                cy.get('._2KpZ6l._2doB4z').click();
            }
        });

        // Click on the Login button
        cy.get('._1_3w1N').click();

        // Enter username and password
        cy.get('input._2IX_2-').first().type('your-email@example.com'); // Replace with your email
        cy.get('input._2IX_2-').last().type('your-password'); // Replace with your password

        // Click on the Login button
        cy.get('._1D1L_j').click();

        // Verify successful login by checking for a user-specific element
        cy.contains('My Account').should('be.visible');
    });
});