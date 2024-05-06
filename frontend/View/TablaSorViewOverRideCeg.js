import TablaSorView from "./TablaSorView.js";

class TablaSorViewWithButtonCeg extends TablaSorView {
  _sorLetrehoz() {
    let txt = `<tr id="${this.adat.userId}">`;
    for (const key in this.adat) {
      if (key !== "userId") {
        txt += `<td>${this.adat[key]}</td>`;
      }
    }
    txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Profil</button></td>`;
    txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Jelentkezés</button></td>`;
    txt += `</tr>`;
    this.tablaElem.append(txt);
    let buttons = this.tablaElem.find("button");
    buttons.eq(buttons.length - 2).on("click", () => {
      this.#esemenyTrigger("profilMegjelenit", this.adat);
    });
    buttons.last().on("click", () => {
      const diakId = parseInt(localStorage.getItem("diakId"), 10);
      const gombSzoveg = buttons.last().text().trim();
 

      if (gombSzoveg === 'Jelentkezés') {
        buttons.last().text('Visszavonás');
        this.#esemenyTrigger("preferalFeltolt", {
          diakId: diakId,
          cegId: this.adat.userId,
        });
      } else if (gombSzoveg === 'Visszavonás') {
        buttons.last().text('Jelentkezés');
        this.#esemenyTrigger("preferalTorol", {
          diakId: diakId,
          cegId: this.adat.userId,
        });
      }
    });

    $("#DiakSajatProf").on("click", () => {
      this.#esemenyTrigger("SajatProfil", this.adat);
    });
  }

  #esemenyTrigger(esemenyNev, adat) {
    const esemeny = new CustomEvent(esemenyNev, { detail: adat });
    window.dispatchEvent(esemeny);
  }
}

export default TablaSorViewWithButtonCeg;
