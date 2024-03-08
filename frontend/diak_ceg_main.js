import DiakController from "./Controller/DiakController.js";
import CegController from "./Controller/CegController.js";
$(function () {
  const currentUrl = window.location.href;

  if (currentUrl.includes("diak.html")) {
    new DiakController();
  } else if (currentUrl.includes("ceg.html")) {
    new CegController();
  } else {
    console.log("Nem azonosítható oldal.");
  }
});
