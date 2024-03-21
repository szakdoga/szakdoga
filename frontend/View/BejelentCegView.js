import TablaSorView from "./TablaSorView.js";
class BejelentCegView {
  #adat;
  constructor(szuloElem, adat) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    console.log(this.#adat);
    this.tablaMegjelenit();
    console.log(this.#adat);
  }
  tablaMegjelenit() {
    let txt = '<table class="table table-bordered"></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.children("table");
    this.tableElem.append(
      "<thead><tr><th>Név</th><th>Szak</th></tr></thead>"
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default BejelentCegView;
