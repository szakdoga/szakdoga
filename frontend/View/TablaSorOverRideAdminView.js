import TablaSorView from "./TablaSorView.js";

class TablaSorOverRideAdminView extends TablaSorView {
    _sorLetrehoz(){
        let txt = `<tr id="${this.adat.userId}">`;
        for (const key in this.adat) {
            if (key !== 'userId') {
                txt += `<td>${this.adat[key]}</td>`
            }
        }
        txt += `<td><button type="button" class="btn btn-primary btn-rounded btn-block">Szerkesztés</button></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
        this.tablaElem.find('button').last().on('click', () => {
            this.#esemenyTrigger('szerkesztes', this.adat);
        });
    }
  

    #esemenyTrigger(esemenyNev, adat) {
        const esemeny = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(esemeny);
    }
}

export default TablaSorOverRideAdminView;