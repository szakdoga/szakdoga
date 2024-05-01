class TablaSorViewCegDiakKapcs {
    #obj = [];
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this._sorLetrehoz();
    }

    _sorLetrehoz() {
        let txt = `<tr data-diak-id="${this.#obj.diakId}" data-ceg-id="${this.#obj.cegId}">`;
        console.log(this.#obj.diakId,this.#obj.cegId);
        for (const key in this.#obj) {
            if (key !== 'diakId' && key !== 'cegId') {
                txt += `<td>${this.#obj[key]}</td>`;
            }
        }
        txt += `<td><button class="btn btn-primary btn-rounded btn-block" id='torlesGomb'>🗑️</button></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
    }
}

export default TablaSorViewCegDiakKapcs;
