describe('ardui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=labelcomponent--primary'));
  it('should render the component', () => {
    cy.get('aadrian-label').should('exist');
  });
});