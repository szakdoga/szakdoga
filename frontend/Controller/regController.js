import RegisztracioModel from "../Model/regModel.js";
import RegisztracioView from "../View/regView.js";
import DataService from "../Model/DataService.js";
class RegController{
    constructor() {
        const adat = {felNev: "", jelszo: "" , jogId: ""};
        const model = new RegisztracioModel(adat);
        const szuloElem = document.querySelector(".regisztracio");
        console.log(szuloElem);
        const view = new RegisztracioView(model.getAdat(), szuloElem);
        //view.submitElem.addEventListener("click", this.handleRegister.bind(this, model));


        this.dataService = new DataService();

        $(window).on("post", (event) => {
            console.log(event.detail);
            this.dataService.postData2("/felhasznalok/create", event.detail);
          });
    }
}
export default RegController;