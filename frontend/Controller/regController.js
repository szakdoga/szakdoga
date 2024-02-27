import RegisztracioModel from "../Model/regModel.js";
import RegisztracioView from "../View/regView.js";
import DataService from "../Model/DataService.js";
class RegController{
    constructor() {
        const adat = {felNev: "", jelszo: "" , jogId: 1};
        const model = new RegisztracioModel(adat);
        const szuloElem = document.querySelector(".regisztracio");
        console.log(szuloElem);
        const view = new RegisztracioView(model.getAdat(), szuloElem);
        //view.submitElem.addEventListener("click", this.handleRegister.bind(this, model));


        this.dataService = new DataService();

        $(window).on("post", (event) => {
            let id = 1;
            console.log(event.detail);
            this.dataService.postData("/felhasznalok/create", event.detail);
          });
    }

    handleRegister(model, event) {
        /*event.preventDefault();
        const adat = model.getAdat();
        console.log("Felhasználónév:", adat.felNev);
        console.log("Jelszó:", adat.jelszo);
        console.log("Jelszó:", adat.jelszoMeg);*/
        this.dataService.postData("/felhasznalok/create", event.detail);
    }
}
export default RegController;