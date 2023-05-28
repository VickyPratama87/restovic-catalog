import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import filter from "lodash.filter";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  app.renderPage();
  await swRegister();
});