class BejelentkezesView {
    #adat = {};
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = `
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">FelhasználóNév:</label>
                    <input type="text" class="form-control" id="username" name="username" value="${this.#adat.username}">
                </div>
                <div class="mb-3">
                    <label for="jelszo" class="form-label">Jelszó:</label>
                    <input type="password" class="form-control" id="jelszo" name="jelszo" value="${this.#adat.jelszo}">
                </div>
                <button type="submit" class="btn btn-primary" id="submit">Bejelentkezés</button>
            </form>
        `;
        this.formElem = this.szuloElem.querySelector("form");
        this.formElem.addEventListener("submit", this.onSubmit.bind(this));
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
