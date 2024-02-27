import bejelntModel from "../Model/bejelntModel.js";
import BejelentkezesView from "../View/bejelntView.js";
class BejelntkezesController {
    constructor() {
        const adat = { username: "", jelszo: "" };
        const model = new bejelntModel(adat);
        const szuloElem = document.querySelector(".bejelentkezes");
        console.log(szuloElem)
        const view = new BejelentkezesView(model.getAdat(), szuloElem);
        window.addEventListener("bejelentkezes", this.bejelentkezes.bind(this, model));
    }

    bejelentkezes(model, event) {
        event.preventDefault();
        const adat = event.detail;
        console.log("Felhasználónév:", adat.username);
        console.log("Jelszó:", adat.jelszo);
    }
}

export default BejelntkezesController;