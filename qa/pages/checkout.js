import { Selector } from "testcafe";
import { byId } from "../utils/selectors";

export default class Checkout {
  constructor() {
    this.firstName = Selector(byId("first-name"),{visibilityCheck: true});
    this.lastName = Selector(byId("last-name"),{visibilityCheck: true});
    this.postalCode = Selector(byId("postal-code"),{visibilityCheck: true});
    this.continueButton = Selector(byId("continue"),{visibilityCheck: true});

    // checkout step 2
    this.finishButton = Selector(byId("finish"),{visibilityCheck: true});
  }
}
