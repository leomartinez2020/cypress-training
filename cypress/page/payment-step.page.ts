class PaymentStepPage {
    private bankWireTag: string;

    constructor() {
        this.bankWireTag = ".bankwire";
    }

    public payByBank() {
        cy.get(this.bankWireTag).click();
    }
}

export { PaymentStepPage };
