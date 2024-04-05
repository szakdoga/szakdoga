import TablaSorViewOverRide from "./TablaSorViewOverRide.js";
class BejelentCegView {
  #adat;
  constructor(szuloElem, adat) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    this.tablaMegjelenit();
    this.kereses();
  }
  tablaMegjelenit() {
    let kereso =
      '<input type="text" id="kereso" placeholder="Keresés..." style="width: 300px; height: 30px; border-radius: 15px;">';
    this.szuloElem.append(kereso);
    let txt = '<table class="table"></table>';
    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.children("table");
    this.tableElem.append(
      "<thead><tr><th>Név</th><th>Szak</th><th> </th></tr></thead>"
    );

    for (const key in this.#adat) {
      new TablaSorViewOverRide(this.#adat[key], this.tableElem);
    }
  }

kereses() {
  const kereso = document.getElementById("kereso");
  kereso.addEventListener("keyup", () => {
    const adat = kereso.value.toLowerCase();
    const rows = this.tableElem.find("tr");
    for (let i = 1; i < rows.length; i++) { // start from 1 to skip the header row
      const cell = rows[i].cells[0]; 
      const text = cell.textContent.toLowerCase();
      rows[i].style.display = text.includes(adat) ? "" : "none";
    }
  });
}
}

export default BejelentCegView;
