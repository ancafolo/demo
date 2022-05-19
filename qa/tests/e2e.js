import Login from "../pages/login";
import LoginProfile from "../profile/login";
import Inventory from "../pages/inventory";
import { getHTML, getPageUrl } from "../utils/functions";
import ProductPage from "../pages/productPage";
import Cart from "../pages/cart";
import CheckoutProfile from "../profile/checkout";
import Checkout from "../pages/checkout";
import CheckoutComplete from "../pages/checkoutComplete";

const login = new Login();
const loginProfile = new LoginProfile();
const inventory = new Inventory();
const productPage = new ProductPage();
const cart = new Cart();
const checkout = new Checkout();
const checkoutProfile = new CheckoutProfile();
const checkoutComplete  = new CheckoutComplete();

fixture`Demo e2e test`
    .page("https://www.saucedemo.com/")
    .beforeEach(async t => {
        await t.resizeWindow(1600,800)
    })

test("Demo e2e test", async t =>{

    await t.expect(getPageUrl()).eql("https://www.saucedemo.com/");

    // Login
    await t.typeText(login.usernameInput,loginProfile.username);
    await t.typeText(login.passwordInput, loginProfile.password);
    await t.click(login.loginButton);

    // Check if main container exists
    await t.expect(inventory.mainContainer.exists).ok();

    // Access the first product
    await t.click(inventory.firstProduct);

    // Check if main container exists
    await t.expect(productPage.mainContainer.exists).ok();

    // ATC
    await t.click(productPage.addToCart);

    // Check Cart
    const cartItemNumber = await getHTML(productPage.cartBadge);
    await t.expect(cartItemNumber).eql("1");
    await t.click(productPage.cartBadge);

    // Check cart content
    await t.expect(cart.cartItemLabel.exists).ok();

    // Proceed to checkout
    await t.click(cart.checkoutButton);

    // Type personal details
    await t.typeText(checkout.firstName, checkoutProfile.firstName);
    await t.typeText(checkout.lastName, checkoutProfile.lastName);
    await t.typeText(checkout.postalCode, checkoutProfile.postalCode);

    // Submit
    await t.click(checkout.continueButton);

    // Check checkout step 2
    await t.expect(getPageUrl()).contains("checkout-step-two");
    
    // Submit
    await t.click(checkout.finishButton);

    // Check content
    await t.expect(checkoutComplete.mainContainer.exists).ok();

    // Back to shop
    await t.click(checkoutComplete.backToShop);

    // Verify redirection
    await t.expect(inventory.mainContainer.exists).ok();

})