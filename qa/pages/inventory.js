import { Selector } from "testcafe";
import { byClass, byClassN } from "../utils/selectors";

export default class Inventory {
  constructor() {
    this.mainContainer = Selector(byClass("inventory_container"),{visibilityCheck: true});
    this.firstProduct = Selector(byClassN("inventory_item_name",0),{visibilityCheck: true});
  }
}
