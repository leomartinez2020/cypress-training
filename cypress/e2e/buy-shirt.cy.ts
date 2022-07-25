describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get(".sf-menu").children().eq(2).click();
    cy.get(".ajax_add_to_cart_button").contains("Add to cart").click();
    cy.get(".button-container").contains("Proceed to checkout").click();
    cy.get(".cart_navigation").contains("Proceed to checkout").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin").click();

    cy.get(".cart_navigation").contains("Proceed to checkout").click();
    cy.get("#cgv").check();
    cy.get(".cart_navigation").contains("Proceed to checkout").click();
    cy.get(".bankwire").click();
    cy.get("#cart_navigation > .button").click();
    cy.get("#center_column > div > p > strong").should("have.text", "Your order on My Store is complete.");
  });
});
