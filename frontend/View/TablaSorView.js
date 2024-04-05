class TablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this._sorLetrehoz();
        this.sorElem = this.tablaElem.children("tr:last-child");
    }

    _sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `</tr>`;
        this.tablaElem.append(txt);
    }

    get adat() {
        return this.#obj;
    }

}
export default TablaSorView;