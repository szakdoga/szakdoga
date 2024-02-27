import DataService from "../Model/DataService.js";

class DataController {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("api/writers", this.megjelenit);

   

    $(window).on("edit", (event) => {
      let obj = event.detail;
      new Szerkeszt(obj, $(".szerkeszt"));
      $(window)
        .off("settingfel")
        .on("settingfel", (event) => {
          this.dataService.updateData(
            "http://localhost:8000/",
            obj.id,
            event.detail
          );
        });
    });

    $(window).on("delete", (event) => {
      this.dataService.deleteData(
        "http://localhost:8000/api/writers",
        event.detail.id
      );
    });
  }

  megjelenit(lista) {
    console.log(lista);
  }
}
export default DataController;
