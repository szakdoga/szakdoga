import TablaSorView from "./TablaSorView.js";
class CegDiakNeveView {
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
    this.tableElem.append("<thead><tr><th>Cég</th><th>Diák</th></thead>");

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}
export default CegDiakNeveView;
