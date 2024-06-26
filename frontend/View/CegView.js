class CegView {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = `
      <div class="container p-5">
        <h2 class="cegH2">Adatok</h2>
            <form class="adatokForm">
            <div class="mb-3 mt-3">
              <label for="neve" class="form-label">Cég neve:</label>
              <input
                type="text"
                class="form-control"
                id="neve"
                placeholder="Szoftver Kft"
                name="neve"
                value="${this.#adat.neve}"
              />
            </div>
            <div class="form-group mb-3">
              <label for="tel" class="form-label">Telefonszám:</label>
              <input
                type="tel"
                class="form-control"
                id="tel"
                name="tel"
                value="${this.#adat.tel}"
              />
            </div>
            <div class="form-group mb-3">
              <label for="kapcsNeve" class="form-label">Kapcsolattartó neve:</label>
              <input
                type="text"
                class="form-control"
                id="kapcsNeve"
                name="kapcsNeve"
                value="${this.#adat.kapcsNeve}"
              />
            </div>
            <div class="form-group mb-3">
              <label for="cim" class="form-label">Cím:</label>
              <input
                type="text"
                class="form-control"
                id="cim"
                name="cim"
                value="${this.#adat.cim}"
              />
            </div>
            <div class="form-group mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                value="${this.#adat.email}"
              />
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
    this.#adat.neve = document.getElementById("neve").value;
    this.#adat.tel = document.getElementById("tel").value;
    this.#adat.kapcsNeve = document.getElementById("kapcsNeve").value;
    this.#adat.cim = document.getElementById("cim").value;
    this.#adat.email = document.getElementById("email").value;
    this.#adat.userId = JSON.parse(localStorage.getItem("userId"));
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(esemeny);
  }

  adatokEllenorzese() {
    const neve = $("#neve");
    const tel = $("#tel");
    const kapcsNeve = $("#kapcsNeve");
    const cim = $("#cim");
    
    if (!this.regexValidalas(neve.val(), /^[a-zA-Z\sáéíóöőúüűÁÉÍÓÖŐÚÜŰ]*$/)) {
      neve.val("");
      neve.attr("placeholder", "Csak betűt tartalmazhat.");
      neve.addClass("invalid");  
      return false;
    }
    
    
    if (!this.regexValidalas(tel.val(), /^\+(?:[0-9] ?){6,14}[0-9]$/)) {
      tel.val("");
      tel.attr("placeholder", "Létező telefonszámot adjon meg.");
      tel.addClass("invalid");  
      return false;
    }
    
    if (!this.regexValidalas(kapcsNeve.val(), /^[a-zA-Z\sáéíóöőúüűÁÉÍÓÖŐÚÜŰ]*$/)) {
      kapcsNeve.val("");
      kapcsNeve.attr("placeholder", "Csak betűt tartalmazhat.");
      kapcsNeve.addClass("invalid");  
      return false;
    }
    
    if (!this.regexValidalas(cim.val(), /^.+$/)) {
      cim.val("");
      cim.attr("placeholder", "Adjon meg egy címet.");
      cim.addClass("invalid");  
      return false;
    }
    return true;
  }

  regexValidalas(value, regex) {
    return regex.test(value);
  }
}

export default CegView;
