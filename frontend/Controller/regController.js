import RegisztracioModel from "../Model/regModel.js";
import RegisztracioView from "../View/regView.js";
import DataService from "../Model/DataService.js";
class RegController {
  constructor() {
    const adat = { felNev: "", jelszo: "", jogId: "" };
    const model = new RegisztracioModel(adat);
    const szuloElem = document.querySelector(".regisztracio");
    console.log(szuloElem);
    const view = new RegisztracioView(model.getAdat(), szuloElem);
    //view.submitElem.addEventListener("click", this.handleRegister.bind(this, model));

    this.dataService = new DataService();

    $(window).on("post", async (event) => {
      console.log(event.detail);
        let jogosultsag = event.detail.jogId;
        await this.dataService.postData("/felhasznalok/create", event.detail);
        this.handleRegister(jogosultsag);
    });
  }

  
  handleRegister(jogosultsag) {
    console.log(jogosultsag);
    try {
        if (jogosultsag === 1) {
          window.location.href = "diak.html";
        } else if (jogosultsag === 2) {
          window.location.href = "ceg.html";
        }
      } catch (error) {
        console.error("Hiba történt az oldalirányítás közben:", error);
      }
  }

}
export default RegController;
