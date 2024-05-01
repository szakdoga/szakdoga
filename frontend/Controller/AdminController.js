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

    $(window).on("szerkesztes", (event) => {
 
      const offcanvas = new bootstrap.Offcanvas(
        document.getElementById("demo")
      );
      this.cegAdatMegj(event.detail, $(".offcanvas-body"));
      offcanvas.show();
    });

    $(window).on("diakSzerkesztes", (event) => {
   
      const offcanvas = new bootstrap.Offcanvas(
        document.getElementById("demo")
      );
      this.diakAdatMegj(event.detail, $(".offcanvas-body"));
      offcanvas.show();
    });
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
      await this.dataService.postData("api/kapcsolatok/create", adat);
      alert("Kapcsolat sikeresen létrehozva");
      const cegek = await this.dataService.getData("/api/cegek");
      const diakok = await this.dataService.getData("/api/diakok");
      document.querySelector(".cdKapcsolat").innerHTML = "";
      this.megjelenitCegDiakKapcsolat({ cegek: cegek, diakok: diakok });
    } catch (error) {
      alert("Hiba történt a kapcsolat létrehozása során");
      console.error(error);
    }
  }

  async megjelenitPreferaltCeg(lista, szuloElem) {
    new AdminPreferalCegView(lista, szuloElem);
  }

  async megjelenitCegDiakKapcsolat() {
    const cegek = await this.dataService.getCegek();
    const diakok = await this.dataService.getDiakok();
    const adatok = { cegek: cegek, diakok: diakok };
    new CegDiakKapcsolat(adatok, ".cdKapcsolat", this);
    await this.dataService.getData("/api/kapcsolatokNeve", (adatok) => {
      const model = new AdminModel(adatok);
      new CegDiakNeveView(model.getAdat(), ".cdKapcsolat");
      this.torles();
    });
  }

  torles() {
    $(".cdKapcsolat").on("click", ".torlesGomb", (event) => {
      const diakId = $(event.target).closest("tr").data("diakId");
      const cegId = $(event.target).closest("tr").data("cegId");
      console.log(diakId, cegId);
      this.deleteCegDiakKapcsolat(diakId, cegId);
    });
  }

  async deleteCegDiakKapcsolat(diakId, cegId) {
    try {
      await this.dataService.deleteData(`/api/kapcsolatok/${diakId}/${cegId}`);

      await this.megjelenitCegDiakKapcsolat();
    } catch (error) {
      console.error(error);
    }
  }

  cegAdatMegj(adat, szuloElem) {
    let data = adat;

    let html = `
      <div class="form-group mb-3">
        <label for="neve">Cég neve</label>
        <input type="text" id="neve" name="neve" class="form-control" value="${data.neve}">
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="form-control" value="${data.email}">
      </div>
      <div class="form-group mb-3">
        <label for="tel">Telefonszám</label>
        <input type="tel" id="tel" name="tel" class="form-control" value="${data.tel}">
      </div>
      <div class="form-group mb-3">
        <label for="kapcsNeve">Kapcsolattartó neve</label>
        <input type="text" id="kapcsNeve" name="kapcsNeve" class="form-control" value="${data.kapcsNeve}">
      </div>
      <div class="form-group mb-3">
        <label for="cim">Cím</label>
        <input type="text" id="cim" name="cim" class="form-control" value="${data.cim}">
      </div>
      <button id="szerkesztGomb" class="btn btn-primary w-100" type="button">Feltöltés</button>
    `;

    szuloElem.html(html);

    $("#szerkesztGomb").on("click", () => {
      let szerkesztettAdat = {
        neve: document.getElementById("neve").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        kapcsNeve: document.getElementById("kapcsNeve").value,
        cim: document.getElementById("cim").value,
        
      };
      this.dataService.updateData(`api/cegek/edit`, data.userId, szerkesztettAdat);
    });
  }

  diakAdatMegj(adat, szuloElem) {
    let data = adat;
  
    let html = `
      <div class="form-group mb-3">
        <label for="nev">Név</label>
        <input type="text" id="nev" name="nev" class="form-control" value="${data.nev}">
      </div>
      <div class="form-group mb-3">
        <label for="szulDatum">Születési dátum</label>
        <input type="date" id="szulDatum" name="szulDatum" class="form-control" value="${data.szulDatum}">
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="form-control" value="${data.email}">
      </div>
      <div class="form-group mb-3">
        <label for="tel">Telefonszám</label>
        <input type="tel" id="tel" name="tel" class="form-control" value="${data.tel}">
      </div>
      <div class="form-group mb-3">
        <label for="fax">Fax</label>
        <input type="text" id="fax" name="fax" class="form-control" value="${data.fax}">
      </div>
      <div class="form-group mb-3">
        <label for="lakcim">Lakcím</label>
        <input type="text" id="lakcim" name="lakcim" class="form-control" value="${data.lakcim}">
      </div>
      <div class="form-group mb-3">
        <label for="neme">Neme</label>
        <input type="text" id="neme" name="neme" class="form-control" value="${data.neme}">
      </div>
      <div class="form-group mb-3">
        <label for="allampolg">Állampolgárság</label>
        <input type="text" id="allampolg" name="allampolg" class="form-control" value="${data.allampolg}">
      </div>
      <button id="szerkesztGomb" class="btn btn-primary w-100" type="button">Feltöltés</button>
      `;

      szuloElem.html(html);
  
      $("#szerkesztGomb").on("click", () => {
        let szerkesztettAdat = {
          nev: document.getElementById("nev").value,
          szulDatum: document.getElementById("szulDatum").value,
          email: document.getElementById("email").value,
          tel: document.getElementById("tel").value,
          fax: document.getElementById("fax").value,
          lakcim: document.getElementById("lakcim").value,
          neme: document.getElementById("neme").value
        };
        this.dataService.updateData(`api/diakok/edit`, data.userId, szerkesztettAdat);
      });
    }
}
export default AdminController;
