import { Selector } from "testcafe";
import { byClass, byId } from "../utils/selectors";

export default class ProductPage {
  constructor() {
    this.addToCart = Selector(byId("add-to-cart-sauce-labs-backpack"),{visibilityCheck: true});
    this.mainContainer = Selector(byClass("inventory_details_container"),{visibilityCheck: true});
    this.cartBadge = Selector(byClass("shopping_cart_badge"),{visibilityCheck: true});
  }
}
