import { Selector } from "testcafe";
import { byId } from "../utils/selectors";

export default class Login {
  constructor() {
    this.usernameInput = Selector(byId("user-name"),{visibilityCheck: true});
    this.passwordInput =  Selector(byId("password"),{visibilityCheck: true});
    this.loginButton = Selector(byId("login-button"),{visibilityCheck: true});
  }
}
