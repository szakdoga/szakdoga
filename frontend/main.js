import bejelntController from "./Controller/BejelentController.js";
import RegController from "./Controller/regController.js";
import AdminController from "./Controller/AdminController.js";
import BejelentCegController from "./Controller/BejelentCegController.js";
import BejelentDiakController from "./Controller/BejelentDiakController.js";
$(function () {
  const currentUrl = window.location.href;
  const jogosultsag = localStorage.getItem("jogosultsag");
  if (currentUrl.includes("bejelentkezes.html")) {
    new bejelntController();
  } else if (currentUrl.includes("regisztracio.html") || currentUrl.includes("diak.html") || currentUrl.includes("ceg.html")) {
    new RegController();
  } else if (currentUrl.includes("index.html") || currentUrl.includes("diakProfil.html") || currentUrl.includes("cegProfil.html")){
    if (jogosultsag == 1) {
      new BejelentDiakController();
    } else if (jogosultsag == 2) {
      new BejelentCegController();
    } else if (jogosultsag == 3) {
      new AdminController();
    } else {
      console.log("Nem azonosítható oldal.");
    } 
  }
});
