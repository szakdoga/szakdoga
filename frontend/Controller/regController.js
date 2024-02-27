import RegisztracioModel from "../Model/regModel.js";
import RegisztracioView from "../View/regView.js";
class RegController{
    constructor() {
        const adat = { felNev: "", jelszo: "" , jelszoMeg:""};
        const model = new RegisztracioModel(adat);
        const szuloElem = document.querySelector(".regisztracio");
        const view = new RegisztracioView(model.getAdat(), szuloElem);
        view.submitElem.addEventListener("click", this.handleRegister.bind(this, model));
    }

    handleRegister(model, event) {
        event.preventDefault();
        const adat = model.getAdat();
        console.log("Felhasználónév:", adat.felNev);
        console.log("Jelszó:", adat.jelszo);
    }
}
export default RegController;