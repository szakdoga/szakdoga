import TablaSorView from "./TablaSorView.js";
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
    let txt ='<table class="table table-hover table-responsive"><thead></thead><tbody></tbody></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");   
    this.tableElem.find("thead").append(
      "<tr class='table-dark'><th>Cég</th><th>Telefonszám</th><th>Kapcsolattartó Neve</th><th>Cím</th><th>Email</th></tr> "
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminView;
