import DataService from "../Model/DataService.js";
import BejelentCegView from "../View/BejelentCegView.js";

class BejelentCegController {
  constructor() {
    this.dataService = new DataService();
    
    this.dataService.getData("api/bejegyzes", this.megjelenit);
  }

  megjelenit(lista) {
    console.log(lista);
    
    new BejelentCegView($(".diakTablazat"),lista)
  }

}
export default BejelentCegController;