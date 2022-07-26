class AddressStepPage {
    private carNav: string;
    private content: string;

    constructor() {
        this.carNav = ".cart_navigation";
        this.content = "Proceed to checkout";
    }

    public checkout() {
        cy.get(this.carNav).contains(this.content).click();
    }
}

export { AddressStepPage };
