class BejelentkezesView {
    #adat = {};
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = `
            <form>
                <div class="mb-3">
                    <label for="felNev" class="form-label">FelhasználóNév:</label>
                    <input type="text" class="form-control" id="felNev" name="felNev" value="${this.#adat.felNev}">
                </div>
                <div class="mb-3">
                    <label for="jelszo" class="form-label">Jelszó:</label>
                    <input type="password" class="form-control" id="jelszo" name="jelszo" value="${this.#adat.jelszo}">
                    <button type="button" id="jelszoMutat">Jelszó mutatása/elrejtése</button>
                </div>
                <button type="submit" class="btn btn-primary" id="submit">Bejelentkezés</button>
            </form>
        `;
        this.formElem = this.szuloElem.querySelector("form");
        this.formElem.addEventListener("submit", this.onSubmit.bind(this));
        const jelszoMutat = this.szuloElem.querySelector("#jelszoMutat");
        const jelszoMezo = this.szuloElem.querySelector("#jelszo");
        jelszoMutat.addEventListener("click", function() {
            if (jelszoMezo.type === "password") {
                jelszoMezo.type = "text";
                jelszoMutat.textContent = "Jelszó elrejtése";
            } else {
                jelszoMezo.type = "password";
                jelszoMutat.textContent = "Jelszó mutatása";
            }
    });
    }

    onSubmit(event) {
        event.preventDefault();
        this.#adatGyujt();
        this.#esemenyTrigger("bejelentkezes");
    }

    #adatGyujt() {
        this.#adat.felNev = document.getElementById("felNev").value;
        this.#adat.jelszo = document.getElementById("jelszo").value;
    }

    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
        window.dispatchEvent(esemeny);
    }
}

export default BejelentkezesView;
