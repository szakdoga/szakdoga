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
    this.keresoMenu();
  }

  keresoMenu() {
  
    const egyediCegNevek = new Set();
    for (const key in this.#adat) {
      egyediCegNevek.add(this.#adat[key].neve);
    }
  
    const valaszto = $('<select class="form-select" id="searchDropdown"></select>');
    valaszto.append('<option value="">Összes</option>');
    for (const nev of egyediCegNevek) {
      valaszto.append(`<option value="${nev}">${nev}</option>`);
    }

    this.szuloElem.prepend(valaszto);
    const cim = $('<h4>Szűrés cég szerint:</h4>');
    this.szuloElem.prepend(cim);
    valaszto.on("change", () => this.tablaSzures(valaszto.val()));
  }

  tablaSzures(nev) {
    if (!nev) {
      this.tableElem.find('tbody tr').show();
      return;
    }
    this.tableElem.find('tbody tr').hide().filter(function() {
      return $(this).find('td').filter(function() {
        return $(this).text() === nev;
      }).length > 0;
    }).show();
  }
}

export default AdminKovetelmenyView;