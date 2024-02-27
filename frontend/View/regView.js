class RegisztracioView {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = `
        <form>
        <div class="mb-3 mt-3">
          <label for="felNev" class="form-label"> Felhasználónév: </label>
          <input
            type="text"
            class="form-control"
            id="felNev"
            placeholder="felhasználónév"
            name="felNev"
            value="${this.#adat.felNev}"
          />
        </div>
        <div class="mb-3">
          <label for="jelszo" class="form-label"> Jelszó: </label>
          <input
            type="password"
            class="form-control"
            id="jelszo"
            placeholder="jelszó"
            name="jelszo"
            value="${this.#adat.jelszo}"
          />
        </div>
        <div class="mb-3">
            <label for="jelszoMeg" class="form-label"> Jelszó megerősítése: </label>
            <input
              type="password"
              class="form-control"
              id="jelszoMeg"
              placeholder="jelszó megerősítése"
              name="jelszoMeg"
              value="${this.#adat.jelszoMeg}"
            />
          </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary w-100" id="submit">Regisztráció</button>

          <p>
            Már van felhasználóneve?
            <a class="nav-link text-info" href="/bejelentkezes">
              Bejelentkezés
            </a>
          </p>
        </div>
      </form>
        `;
    this.formElem = this.szuloElem.querySelector("form");
    this.submitElem = this.formElem.querySelector("#submit");
    this.submitElem.addEventListener("click", this.onSubmit.bind(this));

    /*this.submitElem.on("click",()=>{
        this.#esemenyLetrehozas("post");
    })*/
  }

  onSubmit(event) {
    event.preventDefault();
    this.#adatGyujt();
    this.#esemenyTrigger("post");
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

export default RegisztracioView;
