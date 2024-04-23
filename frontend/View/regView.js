class RegisztracioView {
  #adat = {};
  #jelszoMeg = "";
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = `
    <div class="container p-5">
        <h2 class="regH2">Regisztráció</h2>
        <form class="form">
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
              placeholder="Minimum 8 karakter, 1 nagybetű, 1 szám"
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
                value="${this.#jelszoMeg}"
              />
            </div>
            <div class="mb-3">
            <label for="jogId">Diák/Cég</label>
            <select id="jogId" name="jogId">
              <option value="ures"></option>
              <option value="diak">Diák</option>
              <option value="ceg">Cég</option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary w-100" id="submit">Regisztráció</button>

            <p>
              Már van felhasználóneve?
              <a class="nav-link text-info" href="bejelentkezes.html">
                Bejelentkezés
              </a>
            </p>
          </div>
      </form>
      </div>
        `;
    this.formElem = this.szuloElem.querySelector("form");
    this.submitElem = this.formElem.querySelector("#submit");
    this.submitElem.addEventListener("click", this.onSubmit.bind(this));
  }

  jelszoEllenorzes() {
    const jelszoInput = document.getElementById("jelszoMeg");
    this.#jelszoMeg = this.szuloElem.querySelector("#jelszoMeg").value;

    if (this.#adat.jelszo === this.#jelszoMeg) {
      console.log("Egyezik");
      jelszoInput.classList.remove("is-invalid");
      return true;
    } else {
      jelszoInput.value = "";
      jelszoInput.placeholder = "Jelszó nem egyezik";
      jelszoInput.classList.add("is-invalid");
      return false;
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.#adatGyujt();
    this.jelszoEllenorzes();
    if (this.jelszoEllenorzes()) {
      this.#esemenyTrigger("post");
    }
  }

  #adatGyujt() {
    this.#adat.felNev = document.getElementById("felNev").value;
    this.#adat.jelszo = document.getElementById("jelszo").value;

    const jogId = document.getElementById("jogId");
    if (jogId.value == "diak") {
      this.#adat.jogId = 1;
    } else if (jogId.value == "ceg"){
      this.#adat.jogId = 2;
    }
    console.log(this.#adat.jogId);
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(esemeny);
  }
}

export default RegisztracioView;
