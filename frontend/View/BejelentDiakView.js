import TablaSorViewWithButtonCeg from "./TablaSorViewOverRideCeg.js";
class BejelentDiakView {
  #adat;
  constructor(szuloElem, adat) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    this.tablaMegjelenit();
    this.kereses();
  }
  tablaMegjelenit() {
    let kereso ='<input type="text" id="kereso" placeholder="Keresés..." style="width: 300px; height: 30px; border-radius: 15px;">';
    this.szuloElem.append(kereso);
    let txt ='<table class="table table-hover table-responsive"><thead></thead><tbody></tbody></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");   
    this.tableElem.find("thead").append(
        "<tr class='table-dark'><th>Cég</th><th>Kapcsolattartó</th><th> </th><th> </th></tr>"
      );

    for (const key in this.#adat) {
      new TablaSorViewWithButtonCeg(this.#adat[key], this.tableElem);
    }
  }

  kereses() {
    const kereso = document.getElementById("kereso");
    kereso.addEventListener("keyup", () => {
      const adat = kereso.value.toLowerCase();
      const rows = this.tableElem.find("tr");
      for (let i = 1; i < rows.length; i++) {
    
        const cell = rows[i].cells[0];
        const text = cell.textContent.toLowerCase();
        rows[i].style.display = text.includes(adat) ? "" : "none";
      }
    });
  }
}

export default BejelentDiakView;
