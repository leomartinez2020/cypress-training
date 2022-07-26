import {PaymentStepPage} from "../page/index";
import {
  LoginPage,
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  AddressStepPage,
  ShippingStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addresStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // Add chosen product to cart from product list
    productsListPage.addToCart();
    productsListPage.checkout();

    // Shopping cart summary
    shoppingCartPage.checkoutCart();

    // Authentication - Login
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    // Address - Already set
    addresStepPage.checkout();

    // Shipping: Agree to terms and proceed
    shippingStepPage.checkout();

    // Payment by bank wire
    paymentStepPage.payByBank();

    // Confirm order
    cy.get("#cart_navigation > .button").click();

    // Assert completed order message on page
    cy.get("#center_column > div.box > p > strong").should("have.text", "Your order on My Store is complete.");
  });
});
