import BejelentkezesModel from "../Model/BejelentModel.js";
import BejelentkezesView from "../View/BejelentView.js";
import DataService from "../Model/DataService.js";

class BejelntkezesController {
  constructor() {
    const adat = { felNev: "", jelszo: "" };
    const model = new BejelentkezesModel(adat);
    const dataService = new DataService();
    console.log(dataService);
    const szuloElem = document.querySelector(".bejelentkezes");
    console.log(szuloElem);
    const view = new BejelentkezesView(model.getAdat(), szuloElem);

    window.addEventListener("bejelentkezes", async function (event) {
      event.preventDefault();

      const felhasznalo = await dataService.bejelentkezes(
        event.detail.felNev,
        event.detail.jelszo
      );

      if (felhasznalo) {
        const felhasznaloAdat = await dataService.felhasznaloAdat(
          felhasznalo.felNev
        );

        if (felhasznaloAdat) {
          localStorage.setItem("jogosultsag", felhasznaloAdat.jogId);
          localStorage.setItem("diakId", felhasznaloAdat.userId);
          Swal.fire({
            text: "Sikeres bejelentkezés!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = "index.html";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nincs ilyen felhasználó!",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Nem sikerült a bejelentkezés!",
        });
      }
    });
  }
}

export default BejelntkezesController;
