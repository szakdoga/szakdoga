class DiakView {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = `
            <form>
            <div class="mb-3 mt-3">
              <label for="nev" class="form-label">Neve:</label>
              <input
                type="text"
                class="form-control"
                id="nev"
                placeholder="Gibsz Jakab"
                name="nev"
                value="${this.#adat.nev}"
              />
            </div>
            <div class="mb-3">
              <label for="szulDatum" class="form-label">Születési Dátum:</label>
              <input
                type="date"
                class="form-control"
                id="szulDatum"
                name="szulDatum"
                value="${this.#adat.szulDatum}"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                value="${this.#adat.email}"
              />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">Telefon:</label>
              <input
                type="tel"
                class="form-control"
                id="tel"
                name="tel"
                value="${this.#adat.tel}"
              />
            </div>
            <div class="mb-3">
              <label for="fax" class="form-label">Fax:</label>
              <input
                type="text"
                class="form-control"
                id="fax"
                name="fax"
                value="${this.#adat.fax}"
              />
            </div>
            <div class="mb-3">
              <label for="lakcim" class="form-label">Lakcíme:</label>
              <input
                type="text"
                class="form-control"
                id="lakcim"
                name="lakcim"
                value="${this.#adat.lakcim}"
              />
            </div>
            <div class="mb-3">
              <label for="neme" class="form-label">Nem:</label>
              <select class="form-select" id="neme" name="neme">
                <option value="Férfi" ${
                  this.#adat.neme === "Férfi" ? "selected" : ""
                }>Férfi</option>
                <option value="Nő" ${
                  this.#adat.neme === "Nő" ? "selected" : ""
                }>Nő</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="allampolg" class="form-label">Állampolgárság:</label>
              <input
                type="text"
                class="form-control"
                id="allampolg"
                name="allampolg"
                value="${this.#adat.allampolg}"
              />
            </div>
        
            <div class="mb-3">
            <label for="szakId" class="form-label">Szak:</label>
            <select class="form-select" id="szakId" name="szakId">
              <option value="1" ${
                this.#adat.szakId === "1" ? "selected" : ""
              }>Szoftver</option>
              <option value="2" ${
                this.#adat.szakId === "2" ? "selected" : ""
              }>Irü</option>
            </select>
          </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary w-100" id="submit">Feltöltés</button>
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
    this.#esemenyTrigger("post");
  }

  #adatGyujt() {
    this.#adat.nev = document.getElementById("nev").value;
    this.#adat.szulDatum = document.getElementById("szulDatum").value;
    this.#adat.email = document.getElementById("email").value;
    this.#adat.tel = document.getElementById("tel").value;
    this.#adat.fax = document.getElementById("fax").value;
    this.#adat.lakcim = document.getElementById("lakcim").value;
    this.#adat.neme = document.getElementById("neme").value;
    this.#adat.allampolg = document.getElementById("allampolg").value;
    //this.#adat.atlag = document.getElementById("atlag").value;
    this.#adat.szakId = document.getElementById("szakId").value;
    this.#adat.userId = JSON.parse(localStorage.getItem("userId"));
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(esemeny);
  }
}

export default DiakView;
