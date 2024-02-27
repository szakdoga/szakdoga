class BejelentkezesView {
    #adat = {};
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = `
            <form>
                <div class="forms-group">
                    <label for="username">${this.#adat.username}:</label>
                    <input type="text" class="form-control" id="username" name="username" value="${this.#adat.username}">
                </div>
                <div class="forms-group">
                    <label for="jelszo">${this.#adat.jelszo}:</label>
                    <input type="password" class="form-control" id="jelszo" name="jelszo" value="${this.#adat.jelszo}">
                </div>
                <div>
                    <button type="button" class="btn btn-primary" id="submit">Bejelentkezés</button>
                </div>
            </form>
        `;
        this.formElem = this.szuloElem.querySelector("form");
        this.submitElem = this.formElem.querySelector("#submit");
        this.submitElem.addEventListener("click", this.onSubmit.bind(this));
    }

    onSubmit(event) {
        event.preventDefault();
        this.#adatGyujt();
        this.#esemenyTrigger("bejelentkezes");
    }

    #adatGyujt() {
        this.#adat.username = document.getElementById("username").value;
        this.#adat.jelszo = document.getElementById("jelszo").value;
    }

    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
        window.dispatchEvent(esemeny);
    }
}

export default BejelentkezesView;
