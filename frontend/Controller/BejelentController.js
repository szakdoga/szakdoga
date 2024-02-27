import bejelntModel from "../Model/bejelntModel.js";
import BejelentkezesView from "../View/bejelntView.js";

class BejelntkezesController {
    constructor() {
        const adat = { username: "", jelszo: "" };
        const model = new BejelentkezesModel(adat);
        const szuloElem = document.querySelector(".bejelentkezes");
        console.log(szuloElem)
        const view = new BejelentkezesView(model.getAdat(), szuloElem);
        window.addEventListener("bejelentkezes", this.bejelentkezes.bind(this, model));
    }
    async bejelentkezes(model, event) {
        event.preventDefault();
        const adat = model.getAdat();
        console.log("Felhasználónév:", adat.username);
        console.log("Jelszó:", adat.jelszo);
        try {
            const response = await this.dataService.bejelentkezes(adat.username, adat.jelszo);
            console.log("Bejelentkezési válasz:", response);
        } catch (error) {
            console.error("Bejelentkezési hiba:", error);
        }
    }
}

export default BejelntkezesController;
