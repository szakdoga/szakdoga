import TablaSorView from "./TablaSorView.js";
class AdminKovetelmenyView {
  #adat = {};
  constructor(adat, szuloElemSelector) {
    this.#adat = adat;
    this.szuloElem = $(szuloElemSelector);
    this.tablaMegjelenit();
  }
  tablaMegjelenit() {
    let tablaNev = "<h2>Cég követelmény</h2>";
    this.szuloElem.append(tablaNev);
    let txt =
      '<div class="table-responsive"><table class="table table-hover"><thead></thead><tbody></tbody></table></div>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");
    this.tableElem
      .find("thead")
      .append("<tr class='table-dark'><th>Cég</th><th>Szak</th><th>Fő</th></tr> ");

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }

}

export default AdminKovetelmenyView;