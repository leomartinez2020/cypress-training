class PaymentStepPage {
    private bankWireTag: string;
    private cartNav: string;

    constructor() {
        this.bankWireTag = ".bankwire";
        this.cartNav = "#cart_navigation > .button";
    }

    public payByBank() {
        cy.get(this.bankWireTag).click();
        cy.get(this.cartNav).click();
    }

    public getConfirmationMessage() {
        cy.get("#center_column > div.box > p > strong").should("have.text", "Your order on My Store is complete.");
    }
}

export { PaymentStepPage };
