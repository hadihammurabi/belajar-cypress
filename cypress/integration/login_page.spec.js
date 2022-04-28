describe('Login Page', () => {
  it('can visited', () => {
    cy.visit('https://qa.alta.id/auth/login');
  });

  it('has form', () => {
    cy.get('form').should('exist');
  });

  it('has 2 inputs', () => {
    cy.get('form input').should('have.length', 2);
  });

  it('has 1 button', () => {
    cy.get('form button').should('have.length', 1);
  });


  it('can input email and password', () => {
    cy.get('form input').each((el, i) => {
      if (i == 0) {
        cy.wrap(el).type('alex@mail.com');
      } else {
        cy.wrap(el).type('123123');
      }
    });
  });

  it('can login', () => {
    cy.get('form button').each((el) => {
      cy.wrap(el).click();
    });
  });

  it('redirected to home', () => {
    cy.url().should('eq', 'https://qa.alta.id/');
  });


});