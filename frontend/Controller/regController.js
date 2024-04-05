import RegisztracioModel from "../Model/regModel.js";
import RegisztracioView from "../View/regView.js";
import DataService from "../Model/DataService.js";
class RegController {
  constructor() {
    const adat = { felNev: "", jelszo: "", jogId: "" };
    const model = new RegisztracioModel(adat);
    const szuloElem = document.querySelector(".regisztracio");

    const view = new RegisztracioView(model.getAdat(), szuloElem);

    this.dataService = new DataService();

    $(window).on("post", async (event) => {
      console.log(event.detail);

      localStorage.setItem("jogId", JSON.stringify(event.detail.jogId));

      const response = await this.dataService.postData("/api/felhasznalok/create", event.detail);

      localStorage.setItem("userId", JSON.stringify(response.userId));

      this.handleRegister();
    });
  }

  handleRegister() {
    const jogosultsag = JSON.parse(localStorage.getItem("jogId"));
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
