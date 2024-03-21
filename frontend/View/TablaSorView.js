class TablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this.#sorLetrehoz();
        this.sorElem = this.tablaElem.children("tr:last-child");
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `</tr>`;
        this.tablaElem.append(txt);
    }

}
export default TablaSorView