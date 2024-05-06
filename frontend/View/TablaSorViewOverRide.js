import TablaSorView from "./TablaSorView.js";

class TablaSorViewWithButton extends TablaSorView {
  _sorLetrehoz() {
    let txt = `<tr id="${this.adat.userId}">`;
    for (const key in this.adat) {
      if (key !== "userId" && key !== "szakId") {
        txt += `<td>${this.adat[key]}</td>`;
      }
    }
    txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Profil</button></td>`;
    txt += `</tr>`;
    this.tablaElem.append(txt);
    this.tablaElem
      .find("button")
      .last()
      .on("click", () => {
        console.log(this.adat);
        this.#esemenyTrigger("profilMegjelenit", this.adat);
      });

    $("#CegSajatProf").on("click", () => {
      this.#esemenyTrigger("SajatProfil", this.adat);
    });
  }

  #esemenyTrigger(esemenyNev, adat) {
    const esemeny = new CustomEvent(esemenyNev, { detail: adat });
    window.dispatchEvent(esemeny);
  }
}

export default TablaSorViewWithButton;
