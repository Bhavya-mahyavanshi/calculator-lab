describe("Calculator Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Addition", () => {
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "8");
  });

  it("Subtraction", () => {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("-").click();
    cy.contains("4").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "6");
  });

  it("Multiplication", () => {
    cy.contains("6").click();
    cy.contains("*").click();
    cy.contains("7").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "42");
  });

  it("Division", () => {
    cy.contains("1").click();
    cy.contains("5").click();
    cy.contains("/").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get("input").should("have.value", "5");
  });
});
