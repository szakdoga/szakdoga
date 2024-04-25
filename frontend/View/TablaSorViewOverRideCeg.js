import TablaSorView from "./TablaSorView.js";

class TablaSorViewWithButtonCeg extends TablaSorView {
    _sorLetrehoz(){
        let txt = `<tr id="${this.adat.userId}">`;
        for (const key in this.adat) {
            if (key !== 'userId') {
                txt += `<td>${this.adat[key]}</td>`
            }
        }
        txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Profil</button></td>`;
        txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Preferál</button></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
        let buttons = this.tablaElem.find('button');
        buttons.eq(buttons.length - 2).on('click', () => {
            this.#esemenyTrigger('profilMegjelenit', this.adat);
        });
        buttons.last().on('click', () => {
            const diakId = parseInt(localStorage.getItem("diakId"), 10);
            this.#esemenyTrigger('preferalFeltolt',  { diakId: diakId, cegId: this.adat.userId });
        });
    }

    #esemenyTrigger(esemenyNev, adat) {
        const esemeny = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(esemeny);
    }
}

export default TablaSorViewWithButtonCeg;