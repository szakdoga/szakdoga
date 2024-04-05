import bejelntController from "./Controller/BejelentController.js";
import RegController from "./Controller/regController.js";
import AdminController from "./Controller/AdminController.js";
import BejelentCegController from "./Controller/BejelentCegController.js";
$(function () {
  const currentUrl = window.location.href;

  if (currentUrl.includes("bejelentkezes.html")) {
    new bejelntController();
  } else if (currentUrl.includes("regisztracio.html") || currentUrl.includes("diak.html") || currentUrl.includes("ceg.html")){
    new RegController();
  } else if (currentUrl.includes("index.html") || currentUrl.includes("diakProfil.html")) {
    
    new BejelentCegController()
    //new AdminController();
  } else {
    console.log("Nem azonosítható oldal.");
  }
});
