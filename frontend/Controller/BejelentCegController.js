import DataService from "../Model/DataService.js";
import BejelentCegView from "../View/BejelentCegView.js";
import DiakProfilView from "../View/DiakProfilView.js";

class BejelentCegController {
  constructor() {
    this.dataService = new DataService();
    if (window.location.href.endsWith("diakProfil.html")) {
      const diakData = JSON.parse(localStorage.getItem("diakData"));

      new DiakProfilView($(".diakProfil"), diakData);
      console.log(diakData);
    } else {
      this.dataService.getData("api/diakok/szak", (data) =>
        this.megjelenit(data, $(".diakTablazat"))
      );
    }

    $(window).on("profilMegjelenit", (event) => {
      console.log(event.detail);

      this.dataService.getData(`api/diakok/${event.detail.userId}`, (data) => {
        localStorage.setItem("diakData", JSON.stringify(data));
        window.location.href = "diakProfil.html";
      });
    });
  }

  megjelenit(lista, szuloElem) {
    console.log(lista);

    new BejelentCegView(szuloElem, lista);
  }
}
export default BejelentCegController;
