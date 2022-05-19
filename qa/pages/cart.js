import { Selector } from "testcafe";
import { byClass, byId } from "../utils/selectors";

export default class Cart {
  constructor() {
    this.cartItemLabel =  Selector(byClass("cart_item_label"),{visibilityCheck: true});
    this.checkoutButton = Selector(byId("checkout"),{visibilityCheck:true});
  }
}
