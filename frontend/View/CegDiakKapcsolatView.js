class CegDiakKapcsolat {
  #adat = {};
  constructor(adat, szuloElemSelector, adminController) {
    this.#adat = adat;
    this.szuloElem = $(szuloElemSelector);
    this.adminController = adminController;
    console.log(this.#adat);
    this.cegdiakKapcsolat();
  }
  cegdiakKapcsolat() {
    let txt = `
      <div class="kapcsolat-form" style="display: flex; align-items: center; gap: 20px;">
      <div>
        <label for="cegSelect">Cég</label>
        <select class="form-select" id="cegSelect">
          <option selected>Válassz céget...</option>
        </select>
      </div>
      <div>
        <label for="diakSelect">Diák</label>
        <select class="form-select" id="diakSelect">
          <option selected>Válassz diákot...</option>
        </select>
      </div>
      <button class="btn btn-primary" id="kuldesGomb">Küldés</button>
    </div>
    `;
    this.szuloElem.append(txt);
    this.#adat.cegek.forEach((ceg) => {
      $("#cegSelect").append(`<option value="${ceg.id}">${ceg.neve}</option>`);
    });
    this.#adat.diakok.forEach((diak) => {
      $("#diakSelect").append(
        `<option value="${diak.id}">${diak.nev}</option>`
      );
    });
    $("#kuldesGomb").click(() => {
      const cegId = $("#cegSelect").val();
      const diakId = $("#diakSelect").val();
      this.adminController.createCegDiakKapcsolat({ cegId, diakId });
    });
  }
}

export default CegDiakKapcsolat;
