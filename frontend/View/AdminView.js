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
    let txt = '<table class="table table-bordered"></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.children("table");
    this.tableElem.append(
      "<thead><tr><th>Cég</th><th>Telefonszám</th><th>Kapcsolattartó Neve</th><th>Cím</th><th>Email</th></tr></thead>"
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminView;
