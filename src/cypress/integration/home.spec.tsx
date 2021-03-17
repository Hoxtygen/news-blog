export {};

describe("Home Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should work", () => {
    cy.get("h1").should("have.text", "Welcome to Our News Blog");
  });
});
