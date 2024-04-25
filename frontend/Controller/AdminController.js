import AdminModel from "../Model/AdminModel.js";
import AdminView from "../View/AdminView.js";
import AdminView2 from "../View/AdminView2.js";
import CegDiakKapcsolat from "../View/CegDiakKapcsolatView.js";
import CegDiakNeveView from "../View/CegDiakNeveView.js";
import DataService from "../Model/DataService.js";

class AdminController {
  constructor() {
    this.dataService = new DataService();
    this.megjelenitCegek();
    this.megjelenitDiakok();
    this.megjelenitCegDiakKapcsolat();
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


  async createCegDiakKapcsolat(adat) {
    try {
      await this.dataService.postData('api/kapcsolatok/create',adat);
      alert("Kapcsolat sikeresen létrehozva");
    } catch (error) {
      alert("Hiba történt a kapcsolat létrehozása során");
      console.error(error);
    }
  }
  async megjelenitCegDiakKapcsolat() {
    const adatok = await this.dataService.getData("/api/kapcsolatokNeve", (adatok) => {
      const view = new CegDiakNeveView(adatok, ".cdKapcsolat");
      this.torles();
    });
  }

  torles() {
    $(".cdKapcsolat").on("click", ".torlesGomb", (event) => {
      const diakId = $(event.target).closest("tr").data("diakId");
      const cegId = $(event.target).closest("tr").data("cegId");
      console.log(diakId,cegId);
      this.deleteCegDiakKapcsolat(diakId, cegId);
      
    });
  }

  async deleteCegDiakKapcsolat(diakId, cegId) {
    try {
      await this.dataService.deleteData(`/api/kapcsolatok/${diakId}/${cegId}`,
        () => {
          alert("Kapcsolat sikeresen törölve.");
        },
        (error) => {
          alert("Hiba történt a törlés során.");
        }
      );
    } catch (error) {
      console.error('Törlési hiba:', error);
      alert("Hiba történt a törlés során.");
    }
  }

}
export default AdminController;
