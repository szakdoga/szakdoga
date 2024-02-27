class BejelntkezesModel{
    #adat = {};
    constructor(adat) {
        this.#adat = adat;
    }

    getAdat() {
        return this.#adat;
    }
}
export default BejelntkezesModel;