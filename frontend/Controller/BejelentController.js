import BejelentkezesModel from "../Model/BejelentModel.js";
import BejelentkezesView from "../View/BejelentView.js";
import DataService from "../Model/DataService.js";

class BejelntkezesController {
  constructor() {
    const adat = { felNev: "", jelszo: "" };
    const model = new BejelentkezesModel(adat);
    const dataService = new DataService();
    console.log(dataService)
    const szuloElem = document.querySelector(".bejelentkezes");
    console.log(szuloElem);
    const view = new BejelentkezesView(model.getAdat(), szuloElem);
    window.addEventListener("bejelentkezes", function (event) {
      event.preventDefault();
      console.log(event.detail);
      dataService.bejelentkezes(event.detail.felNev, event.detail.jelszo);
      
    });
   
  }

}

export default BejelntkezesController;
