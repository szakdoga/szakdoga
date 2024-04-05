import CegView from "../View/CegView.js";
import CegModel from "../Model/CegModel.js";
import DataService from "../Model/DataService.js";
class CegController {
  constructor() {
    const adat = { neve: "", tel: "", kapcsNeve: "", cim: "", email: "", userId:""};
    const model = new CegModel(adat);
    const szuloElem = document.querySelector(".ceg");
    console.log(szuloElem);
    const view = new CegView(model.getAdat(), szuloElem);

    this.dataService = new DataService();

    $(window).on("post", (event) => {
      console.log(event.detail);
      this.dataService
        .postData("/api/cegek/create", event.detail)
        .then((response) => {
          console.log(response);
          Swal.fire({
            icon: "success",
            title: "Sikeres regisztráció!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.href = "bejelentkezes.html";
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    });
  }
}
export default CegController;
