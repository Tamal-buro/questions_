Output for below - 

it(‘test one’, function() {
    console.log(‘John”);
    const lastName = cy.wrap(“Peter”);
    console.log(lastName);
})

O/P- ??

==============================================

it("test two”, function() {
    console.log(“John”);
    cy.wrap(‘Peter’).then(name => {
        console.log(name);
    })
    console.log(‘Automation’);
})

O/P - ??

==========================================
