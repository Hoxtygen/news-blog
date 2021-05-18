export {};

describe("Home Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should work", () => {
    cy.get("h1").should("have.text", "Welcome to Our News Blog");
  });

  it("should have the right initial state", () => {
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", { stories:{stories: [], status: "idle", error: null} });
  });

  
  it('should get the length of the store', () => {
    cy.window()
    .its("store")
    .invoke("getState")
    .its('stories.stories')
    .should('have.length',0 )
  })
});
