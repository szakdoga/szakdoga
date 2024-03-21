import TablaSorView from "./TablaSorView.js";
class AdminView2 {
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
      "<thead><tr><th>Név</th><th>Születési Dátum</th><th>Email</th><th>Telefonszám</th><th>Fax</th><th>Lakcím</th><th>Neme</th><th>Állampolgársága</th></tr></thead>"
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminView2;
