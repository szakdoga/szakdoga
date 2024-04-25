import TablaSorView from "./TablaSorView.js";
class AdminPreferalCegView {
  #adat = {};
  constructor(adat, szuloElemSelector) {
    this.#adat = adat;
    this.szuloElem = $(szuloElemSelector);
    this.tablaMegjelenit();
  }
  tablaMegjelenit() {
    let tablaNev ='<h2>Preferált cégek</h2>';
    this.szuloElem.append(tablaNev);
    let txt ='<div class="table-responsive"><table class="table table-hover"><thead></thead><tbody></tbody></table></div>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");   
    this.tableElem.find("thead").append(
      "<tr class='table-dark'><th>Diák</th><th>Cég</th></tr> "
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminPreferalCegView;
