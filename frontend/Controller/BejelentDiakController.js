import DataService from "../Model/DataService.js";
import BejelentDiakView from "../View/BejelentDiakView.js";
import CegProfilView from "../View/CegProfilView.js";
import DiakProfilView from "../View/DiakProfilView.js";

class BejelentDiakController {
  constructor() {
    this.dataService = new DataService();
    if (window.location.href.endsWith("cegProfil.html")) {
      const cegData = JSON.parse(localStorage.getItem("cegData"));
      new CegProfilView($(".cegProfil"), cegData);
    } else if (window.location.href.endsWith("diakProfil.html")) {
      const diakData = JSON.parse(localStorage.getItem("diakData"));
      new DiakProfilView($(".diakProfil"), diakData);
    }else {
      this.dataService.getData("api/cegek/Adat", (data) =>
        this.megjelenit(data, $(".cegekTablazat"))
      );
    }

    $(window).on("SajatProfil", (event) => {
      const sajatId = parseInt(localStorage.getItem("diakId"), 10);
      this.dataService.getData(`api/diakok/${sajatId}`, (data) => {
        localStorage.setItem("diakData", JSON.stringify(data));
        window.location.href = "diakProfil.html";
      });
    });

    $(window).on("profilMegjelenit", (event) => {
      this.dataService.getData(`api/cegek/${event.detail.userId}`, (data) => {
        localStorage.setItem("cegData", JSON.stringify(data));
        window.location.href = "cegProfil.html";
      });
    });

    $(window).on("preferalFeltolt", async (event) => {
      const response = await this.dataService.postData(
        `api/preferalt/create/${event.detail.diakId}/${event.detail.cegId}`
      );
      if (response.status == 500) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Már jelentkeztél ehhez a céghez!",
        });
        return;
      }
    });

    $(window).on("preferalTorol", (event) => {
      this.dataService.deleteData(
        `api/preferalt_cegek/torles/${event.detail.diakId}/${event.detail.cegId}`,
        (data) => {
          console.log('Sikeres törlés!', data);
        },
        (error) => {
          console.error('Nem sikerült törölni!', error);
        }
      );
    });
    
  }

  megjelenit(lista, szuloElem) {
    new BejelentDiakView(szuloElem, lista);
  }
}
export default BejelentDiakController;
