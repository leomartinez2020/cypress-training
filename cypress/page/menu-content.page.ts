class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string

    constructor() {
        this.tShirtMenu = ".sf-menu";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).children().eq(2).click()
    }
}

export { MenuContentPage };
