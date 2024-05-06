import TablaSorViewOverRide from "./TablaSorViewOverRide.js";
class BejelentCegView {
  #adat;
  constructor(szuloElem, adat) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    this.tablaMegjelenit();
  }
  tablaMegjelenit() {
    let kereso =
      '<input type="text" id="kereso" placeholder="Keresés..." style="width: 300px; height: 30px; border-radius: 15px;">';
    let txt =
      '<div class="table-responsive"><table class="table table-hover"><thead></thead><tbody></tbody></table></div>';

    let igenyGomb =
      '<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#diakIgeny">Diák igény</button>';

    this.searchContainer = $(document).find("#searchContainer");
    this.searchContainer.append(kereso);

    this.szuloElem.append(txt);
    this.tableElem = this.szuloElem.find("table");
    this.tableElem
      .find("thead")
      .append(
        "<tr class='table-dark'><th>Név</th><th>Szak</th><th> </th></tr>"
      );

    for (const key in this.#adat) {
      new TablaSorViewOverRide(this.#adat[key], this.tableElem);
    }
    this.kereses();
    this.keresoMenu();
    this.searchContainer.append(igenyGomb);
    this.diakIgenyDiv = $(document).find("#diakIgeny");
    this.searchContainer.find('button[data-bs-target="#diakIgeny"]').click(() => {
      this.diakIgenyFeltolt();
    });
    
   
  }

  keresoMenu() {
    const szakok = new Set();
    for (const key in this.#adat) {
      szakok.add(this.#adat[key].megnevezes);
    }

    const valaszto = $(
      '<select class="form-select" id="searchDropdown"></select>'
    );
    valaszto.append('<option value="">Összes</option>');
    for (const szak of szakok) {
      valaszto.append(`<option value="${szak}">${szak}</option>`);
    }

    this.searchContainer.append(valaszto);
    valaszto.on("change", () => this.tablaSzures(valaszto.val()));
  }

  tablaSzures(nev) {
    if (!nev) {
      this.tableElem.find("tbody tr").show();
      return;
    }
    this.tableElem
      .find("tbody tr")
      .hide()
      .filter(function () {
        return (
          $(this)
            .find("td")
            .filter(function () {
              return $(this).text() === nev;
            }).length > 0
        );
      })
      .show();
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
  diakIgenyFeltolt() {
    this.diakIgenyDiv.empty();
    const szakok = new Map();
    for (const key in this.#adat) {
      szakok.set(this.#adat[key].megnevezes, this.#adat[key].szakId);
    }
    this.diakIgenyDiv.append("<h4>Szak: </h4>");
    const valaszto = $('<select class="form-select" id="szakIgeny"></select>');
    valaszto.append('<option value="">Válassz</option>');
    for (const [szak, szakId] of szakok) {
      valaszto.append(`<option value="${szakId}">${szak}</option>`);
    }
    this.diakIgenyDiv.append(valaszto);
    this.diakIgenyDiv.append("<h4>Fő: </h4>");
    const foIgeny = $('<select class="form-select" id="foIgeny"></select>');
    for (let i = 1; i <= 10; i++) {
      foIgeny.append(`<option value="${i}">${i}</option>`);
    }
    this.diakIgenyDiv.append(foIgeny);
    const feltoltGomb = $('<button class="btn btn-primary" id="feltoltIgeny">Igénylés</button>'); 
    feltoltGomb.click(() => {
      this.#esemenyTrigger('igenyFeltolt', {
        szakId: valaszto.val(),
        fo: foIgeny.val(),
      });
    });
    this.diakIgenyDiv.append(feltoltGomb);
  }

  #esemenyTrigger(esemenyNev, adat) {
    const esemeny = new CustomEvent(esemenyNev, { detail: adat });
    window.dispatchEvent(esemeny);
  }
}

export default BejelentCegView;
