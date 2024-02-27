import bejelntController from "./Controller/bejelntController.js";
import RegController from "./Controller/regController.js";
$(function () {
  const currentUrl = window.location.href;

  if (currentUrl.includes("bejelentkezes.html")) {
    new bejelntController();
  } else if (currentUrl.includes("regisztracio.html")) {
    new RegController();
  } else {
    console.log("Nem azonosítható oldal.");
  }
});
