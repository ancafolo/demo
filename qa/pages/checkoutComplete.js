import { Selector } from "testcafe";
import { byId } from "../utils/selectors";

export default class CheckoutComplete {
  constructor() {
    this.mainContainer = Selector(byId("checkout_complete_container"),{visibilityCheck: true});
    this.backToShop = Selector(byId("back-to-products"),{visibilityCheck: true});
}
}