import bejelntController from "./Controller/BejelentController.js";
import RegController from "./Controller/regController.js";
import AdminController from "./Controller/AdminController.js";
$(function () {
  const currentUrl = window.location.href;

  if (currentUrl.includes("bejelentkezes.html")) {
    new bejelntController();
  } else if (currentUrl.includes("regisztracio.html")) {
    new RegController();
  } else if (currentUrl.includes("index.html")) {
    //new AdminController();
  } else {
    console.log("Nem azonosítható oldal.");
  }
});
