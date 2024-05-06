import DataService from "../Model/DataService.js";
import BejelentCegView from "../View/BejelentCegView.js";
import DiakProfilView from "../View/DiakProfilView.js";
import CegProfilView from "../View/CegProfilView.js";
class BejelentCegController {
  constructor() {
    this.dataService = new DataService();
    if (window.location.href.endsWith("diakProfil.html")) {
      const diakData = JSON.parse(localStorage.getItem("diakData"));
      new DiakProfilView($(".diakProfil"), diakData);
    
    }else if(window.location.href.endsWith("cegProfil.html")){ 
      const cegData = JSON.parse(localStorage.getItem("cegData"));
      new CegProfilView($(".cegProfil"), cegData);
    } else {
      this.dataService.getData("api/diakok/szak", (data) =>
        this.megjelenit(data, $(".diakTablazat"))
      );
    }

    $(window).on("SajatProfil", (event) => {
      const sajatId = parseInt(localStorage.getItem("diakId"), 10);
      this.dataService.getData(`api/cegek/${sajatId}`, (data) => {
        localStorage.setItem("cegData", JSON.stringify(data));
        window.location.href = "cegProfil.html";
      });
    });

    $(window).on("profilMegjelenit", (event) => {
      this.dataService.getData(`api/diakok/${event.detail.userId}`, (data) => {
        localStorage.setItem("diakData", JSON.stringify(data));
        window.location.href = "diakProfil.html";
      });
    });

    $(window).on("igenyFeltolt", (event) => {
      const cegId = parseInt(localStorage.getItem("diakId"), 10);
      const szakId = parseInt(event.detail.szakId, 10);
      const fo = parseInt(event.detail.fo, 10);
      const adat = {
        cegId: cegId,
        szakId: szakId,
        fo: fo
      };
      try {
        const response =  this.dataService.postData("api/igenyek/create", adat);
        Swal.fire({
          text: "Sikeres feltöltés!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        });
      }
      catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Nem sikerült a feltöltés!",
        });
      }
    });
    
  }

  megjelenit(lista, szuloElem) {
    new BejelentCegView(szuloElem, lista);
  }
}
export default BejelentCegController;
