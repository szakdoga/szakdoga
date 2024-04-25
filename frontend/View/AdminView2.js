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
    let tablaNev ='<h2>Diákok</h2>';
    this.szuloElem.append(tablaNev);
    let txt ='<div class="table-responsive"><table class="table table-hover"><thead></thead><tbody></tbody></table></div>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");   
    this.tableElem.find("thead").append(
      "<tr class='table-dark'><th>Név</th><th>Születési Dátum</th><th>Email</th><th>Telefonszám</th><th>Fax</th><th>Lakcím</th><th>Neme</th><th>Állampolgársága</th></tr>"
    );

    for (const key in this.#adat) {
      new TablaSorView(this.#adat[key], this.tableElem);
    }
  }
}

export default AdminView2;
