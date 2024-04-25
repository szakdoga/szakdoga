import AdminModel from "../Model/AdminModel.js";
import AdminView from "../View/AdminView.js";
import AdminView2 from "../View/AdminView2.js";
import CegDiakKapcsolat from "../View/CegDiakKapcsolatView.js";
import CegDiakNeveView from "../View/CegDiakNeveView.js";
import DataService from "../Model/DataService.js";
import AdminPreferalCegView from "../View/AdminPreferalCegView.js";

class AdminController {
  constructor() {
    this.dataService = new DataService();
    this.megjelenitCegek();
    this.megjelenitDiakok();
    this.megjelenitCegDiakKapcsolat();
    this.dataService.getData("api/preferalt_cegek", (adatok) =>
      this.megjelenitPreferaltCeg(adatok, $(".preferaltCeg"))
    );
  }

  async megjelenitCegek() {
    await this.dataService.getData("/api/cegek/lista", (adatok) => {
      const model = new AdminModel(adatok);
      new AdminView(model.getAdat(), ".cegek");
    });
  }

  async megjelenitDiakok() {
    await this.dataService.getData("/api/diakok/lista", (adatok) => {
      console.log(adatok);
      const model = new AdminModel(adatok);
      new AdminView2(model.getAdat(), ".diakok");
    });
  }

  async megjelenitCegDiakKapcsolat() {
    const cegek = await this.dataService.getCegek();
    const diakok = await this.dataService.getDiakok();
    const adatok = { cegek: cegek, diakok: diakok };
    new CegDiakKapcsolat(adatok, ".cdKapcsolat", this);
    await this.dataService.getData("/api/kapcsolatokNeve", (adatok) => {
      const model = new AdminModel(adatok);
      new CegDiakNeveView(model.getAdat(), ".cdKapcsolat");
    });
  }

  async megjelenitPreferaltCeg(lista, szuloElem) {
    new AdminPreferalCegView(lista, szuloElem );
  }

  async createCegDiakKapcsolat(adat) {
    try {
      await this.dataService.postData("api/kapcsolatok/create", adat);
      alert("Kapcsolat sikeresen létrehozva");
      const cegek = await this.dataService.getData("/api/cegek");
      const diakok = await this.dataService.getData("/api/diakok");
      document.querySelector(".cdKapcsolat").innerHTML = '';
      this.megjelenitCegDiakKapcsolat({ cegek: cegek, diakok: diakok });
    } catch (error) {
      alert("Hiba történt a kapcsolat létrehozása során");
      console.error(error);
    }
    
  }
}
export default AdminController;
