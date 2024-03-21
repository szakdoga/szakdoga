import TablaSorView from "./TavlaSorView.js";
class TablaView {
  #lista;
  constructor(szuloElem, lista) {
    this.szuloElem = szuloElem;
    this.#lista = lista;
    console.log(this.#lista);
    this.tablaMegjelenit();
    console.log(this.#lista);
  }
  tablaMegjelenit() {
    let txt = '<table class="table table-bordered"></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.children("table");
    this.tableElem.append(
      "<thead><tr><th>Osztály</th><th>Tevékenység</th><th>Pont</th><th>Státusz</th></tr></thead>"
    );

    for (const key in this.#lista) {
      new TablaSorView(this.#lista[key], this.tableElem);
    }
  }
}
export default TablaView;