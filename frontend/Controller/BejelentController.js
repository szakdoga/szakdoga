import BejelentkezesModel from "../Model/BejelentModel.js";
import BejelentkezesView from "../View/BejelentView.js";
import DataService from "../Model/DataService.js";

class BejelntkezesController {
  constructor() {
    const adat = { felNev: "", jelszo: "" };
    const model = new BejelentkezesModel(adat);
    const dataService = new DataService();
    console.log(dataService);
    const szuloElem = document.querySelector(".bejelentkezes");
    console.log(szuloElem);
    const view = new BejelentkezesView(model.getAdat(), szuloElem);

    window.addEventListener("bejelentkezes", async function (event) {
      event.preventDefault();
      console.log(event.detail);

      const felhasznalo = await dataService.bejelentkezes(
        event.detail.felNev,
        event.detail.jelszo
      );
      console.log(felhasznalo);
      const felhasznaloAdat = await dataService.felhasznaloAdat(felhasznalo.felNev);
      localStorage.setItem("jogosultsag", felhasznaloAdat.jogId);
      localStorage.setItem("diakId", felhasznaloAdat.userId);
      window.location.href = "index.html";
    });
  }
}

export default BejelntkezesController;
