import CegView from "../View/CegView.js";
import CegModel from "../Model/CegModel.js";
import DataService from "../Model/DataService.js";
class CegController {
  constructor() {
    const adat = { neve: "", tel: "", kapcsNeve: "", cim: "", email: "" };
    const model = new CegModel(adat);
    const szuloElem = document.querySelector(".ceg");
    console.log(szuloElem);
    const view = new CegView(model.getAdat(), szuloElem);

    this.dataService = new DataService();

    $(window).on("post", (event) => {
      console.log(event.detail);
      this.dataService.postData("/cegek/create", event.detail);
    });
  }
}
export default CegController;
