import TablaSorView from "./TablaSorView.js";

class TablaSorViewWithButtonCeg extends TablaSorView {
    _sorLetrehoz(){
        let txt = `<tr id="${this.adat.userId}">`;
        for (const key in this.adat) {
            if (key !== 'userId') {
                txt += `<td>${this.adat[key]}</td>`
            }
        }
        txt += `<td><button id="Profil" type="button" class="btn btn-primary btn-rounded btn-block">Profil</button></td>`;
        txt += `<td><button id="Preferal" type="button" class="btn btn-primary btn-rounded btn-block">Preferál</button></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
        this.tablaElem.find('#Profil').on('click', () => {
            this.#esemenyTrigger('profilMegjelenit', this.adat);
        });
        this.tablaElem.find('#Preferal').on('click', () => {
            const diakId = localStorage.getItem("diakId");
            this.#esemenyTrigger('preferalFeltolt', { diakId: diakId, cegId: this.adat.userId });
        });
       
    }

    #esemenyTrigger(esemenyNev, adat) {
        const esemeny = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(esemeny);
    }
}

export default TablaSorViewWithButtonCeg;