class DiakView {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = `
    <div class="container p-5">
      <h2 class="diakH2">Adatok</h2>
            <form class="adatokForm">
            <div class="form-group mb-3">
              <label for="nev" class="form-label">Név:</label>
              <input
                type="text"
                class="form-control"
                id="nev"
                placeholder="Gibsz Jakab"
                name="nev"
                value="${this.#adat.nev}"
              />
            </div>
            <div class="form-group mb-3">
            <label for="szulDatum" class="form-label">Születési dátum:</label>
            <input
              type="date"
              class="form-control"
              id="szulDatum"
              name="szulDatum"
              value="${this.#adat.szulDatum}"
            />
          </div>
          <div class="form-group mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="gibszjakab@gmail.com"
              value="${this.#adat.email}"
            />
          </div>
          <div class="form-group mb-3">
            <label for="tel" class="form-label">Telefon:</label>
            <input
              type="tel"
              class="form-control"
              id="tel"
              name="tel"
              placeholder="123-456-7890"
              value="${this.#adat.tel}"
            />
          </div>
          <div class="form-group mb-3">
              <label for="fax" class="form-label">Fax:</label>
              <input
                type="text"
                class="form-control"
                id="fax"
                name="fax"
                value="${this.#adat.fax}"
              />
            </div>
            <div class="form-group mb-3">
              <label for="lakcim" class="form-label">Lakcím:</label>
              <input
                type="text"
                class="form-control"
                id="lakcim"
                name="lakcim"
                value="${this.#adat.lakcim}"
              />
            </div>
            <div class="form-group mb-3">
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
            <div class="form-group mb-3">
              <label for="allampolg" class="form-label">Állampolgárság:</label>
              <input
                type="text"
                class="form-control"
                id="allampolg"
                name="allampolg"
                value="${this.#adat.allampolg}"
              />
            </div>
        
            <div class="form-group mb-3">
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
          </div>
            `;
    this.formElem = this.szuloElem.querySelector("form");
    this.submitElem = this.formElem.querySelector("#submit");
    this.submitElem.addEventListener("click", this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    this.#adatGyujt();
    if (this.adatokEllenorzese()) {
      this.#esemenyTrigger("post");
    }
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
 
    this.#adat.szakId = document.getElementById("szakId").value;
    this.#adat.userId = JSON.parse(localStorage.getItem("userId"));
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(esemeny);
  }

  adatokEllenorzese() {
    const email = $("#email");
    const tel = $("#tel");

    if (!this.regexValidalas(email.val(), /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      email.val("");
      email.attr("placeholder", "Érvényes email címet adjon meg.");
      email.addClass("invalid");  
      return false;
    }

    if (!this.regexValidalas(tel.val(), /^\+(?:[0-9] ?){6,14}[0-9]$/)) {
      tel.val("");
      tel.attr("placeholder", "Létező telefonszámot adjon meg.");
      tel.addClass("invalid");  
      return false;
    }


    return true;
  }

  regexValidalas(value, regex) {
    return regex.test(value);
  }


}

export default DiakView;
