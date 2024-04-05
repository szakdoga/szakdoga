import DiakModel from "../Model/DiakModel.js";
import DiakView from "../View/DiakView.js";
import DataService from "../Model/DataService.js";
class DiakController {
  constructor() {
    const adat = {
      nev: "",
      szulDatum: "",
      email: "",
      tel: "",
      fax: "",
      lakcim: "",
      neme: "",
      allampolg: "",
      szakId: "",
      userId: "",
    };
    const model = new DiakModel(adat);
    const szuloElem = document.querySelector(".diak");
    console.log(szuloElem);
    const view = new DiakView(model.getAdat(), szuloElem);

    this.dataService = new DataService();

    $(window).on("post", (event) => {
      console.log(event.detail);
      this.dataService
        .postData("/api/diakok/create", event.detail)
        .then((response) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Sikeres regisztráció!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.href = "bejelentkezes.html";
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
    });
  }
}
export default DiakController;
