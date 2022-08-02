class PaymentStepPage {
    private bankWireTag: string;
    private cartNav: string;
    private confirmationMessageTag: string;
    private confirmationMessageText: any;

    constructor() {
        this.bankWireTag = ".bankwire";
        this.cartNav = "#cart_navigation > .button";
        this.confirmationMessageTag = "#center_column > div.box > p > strong";
    }

    public payByBank() {
        cy.get(this.bankWireTag).click();
        cy.get(this.cartNav).click();
    }

    public getConfirmationMessage() {
        this.confirmationMessageText = cy.get(this.confirmationMessageTag);
        return this.confirmationMessageText;
    }
}

export { PaymentStepPage };
