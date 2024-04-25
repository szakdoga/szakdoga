import DataService from "../Model/DataService.js";
import BejelentDiakView from "../View/BejelentDiakView.js";
import CegProfilView from "../View/CegProfilView.js";

class BejelentDiakController {
  constructor() {
    this.dataService = new DataService();
    if (window.location.href.endsWith("cegProfil.html")) {
      const cegData = JSON.parse(localStorage.getItem("cegData"));
      new CegProfilView($(".cegProfil"), cegData);
    } else {
      this.dataService.getData("api/cegek/Adat", (data) =>
        this.megjelenit(data, $(".cegekTablazat"))
      );
    }

    $(window).on("profilMegjelenit", (event) => {
      this.dataService.getData(`api/cegek/${event.detail.userId}`, (data) => {
        localStorage.setItem("cegData", JSON.stringify(data));
        window.location.href = "cegProfil.html";
      });
    });

    $(window).on("preferalFeltolt", (event) => {
      console.log(event.detail);
      this.dataService.postData(`api/preferalt/create/${event.detail.diakId}/${event.detail.cegId}` );
    
    });
    
  }

  megjelenit(lista, szuloElem) {
    new BejelentDiakView(szuloElem, lista);
  }
}
export default BejelentDiakController;
