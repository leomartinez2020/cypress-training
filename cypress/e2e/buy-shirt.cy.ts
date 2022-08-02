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
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    const expectedText = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addToCart();
    productsListPage.checkout();

    shoppingCartPage.checkoutCart();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.checkout();

    shippingStepPage.checkout();

    paymentStepPage.payByBank();
    paymentStepPage.getConfirmationMessage().should("have.text", expectedText);
  });
});
