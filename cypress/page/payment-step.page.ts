class PaymentStepPage {
    private bankWireTag: string;
    private cartNav: string;
    private confirmationMessageTag: string;

    constructor() {
        this.bankWireTag = ".bankwire";
        this.cartNav = "#cart_navigation > .button";
        this.confirmationMessageTag = ".cheque-indent > .dark";
    }

    public payByBank() {
        cy.get(this.bankWireTag).click();
        cy.get(this.cartNav).click();
    }

    public getConfirmationMessage() {
        return cy.get(this.confirmationMessageTag);
    }
}

export { PaymentStepPage };
