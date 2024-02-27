import BejelentkezesModel from "../Model/BejelentModel.js";
import BejelentkezesView from "../View/BejelentView.js";
class BejelentkezesController{
    constructor() {
        const adat = { username: "", jelszo: "" };
        const model = new BejelentkezesModel(adat);
        const szuloElem = document.querySelector(".bejelentkezes");
        console.log(szuloElem)
        const view = new BejelentkezesView(model.getAdat(), szuloElem);
        view.submitElem.addEventListener("click", this.bejelentkezes.bind(this, model));
    }

    bejelentkezes(model, event) {
        event.preventDefault();
        const adat = model.getAdat();
        console.log("Felhasználónév:", adat.username);
        console.log("Jelszó:", adat.jelszo);
    }
}
export default BejelentkezesController;