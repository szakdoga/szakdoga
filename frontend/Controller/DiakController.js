import DiakModel from "../Model/DiakModel.js";
import DiakView from "../View/DiakView.js";
import DataService from "../Model/DataService.js";
class DiakController{
    constructor() {
        const adat = {nev: "", szulDatum: "" , email: "", tel: "",fax: "",lakcim: "",neme: "",allampolg: "",atlag: "",szakId: ""};
        const model = new DiakModel(adat);
        const szuloElem = document.querySelector(".diak");
        console.log(szuloElem);
        const view = new DiakView(model.getAdat(), szuloElem);

        this.dataService = new DataService();

        $(window).on("post", (event) => {
            console.log(event.detail);
            this.dataService.postData("/diakok/create", event.detail);
          });
    }
}
export default DiakController;