import TablaSorOverRideAdminView from "./TablaSorOverRideAdminView.js";
class AdminView {
  #adat = {};
  constructor(adat, szuloElemSelector) {
    this.#adat = adat;
    this.szuloElem = $(szuloElemSelector);
    console.log(this.#adat);
    this.tablaMegjelenit();
  }
  tablaMegjelenit() {
    let tablaNev ='<h2>Cégek</h2>';
    this.szuloElem.append(tablaNev);
    let txt ='<div class="table-responsive"><table class="table table-hover"><thead></thead><tbody></tbody></table></div>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");   
    this.tableElem.find("thead").append(
      "<tr class='table-dark'><th>Cég</th><th>Telefonszám</th><th>Kapcsolattartó neve</th><th>Cím</th><th>Email</th><th></th></tr> "
    );

    for (const key in this.#adat) {
      new TablaSorOverRideAdminView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminView;
