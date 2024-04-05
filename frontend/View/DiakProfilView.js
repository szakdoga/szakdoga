class DiakProfilView {
  #adat = [];
  constructor(szuloElem, adat) {
    this.szuloElem = szuloElem;
    this.#adat = adat;
    console.log(this.#adat);
    this.diakAdatMegj();
  }

  diakAdatMegj() {
    let data = this.#adat[0]; // 0. elem, mert csak egy diakot kérünk le
  
    let html = `
      <img id="profilKep" src="uresProfil.png" alt="Profile Picture" style="width: 150px; height: 150px; cursor: pointer;">
      <input type="file" id="kepFeltolt" accept="image/*" style="display: none;">
      <h1>${data.nev}</h1>
      <p>Emailcím: ${data.email}</p>
      <p>Telefonszám: ${data.tel}</p>
      <p class="bord">Fax: ${data.fax}</p>
      <h2>Lakcím</h2>
      <p class="bord">${data.lakcim}</p>
      <h2>Állampolgárság</h2>
      <p class="bord">${data.allampolg}</p>
      <h2>Neme</h2>
      <p class="bord">${data.neme}</p>
      <h2>Születési dátum:</h2>
      <p>${data.szulDatum}</p>
    `;
  
    this.szuloElem.html(html);
  
    let profilKep = document.getElementById('profilKep');
    profilKep.addEventListener('mouseover', function() {
      this.src = 'kepFeltolt.png'; 
    });
  
    profilKep.addEventListener('mouseout', function() {
      this.src = 'uresProfil.png';
    });
  
    profilKep.addEventListener('click', function() {
      document.getElementById('kepFeltolt').click();
    });
  
    document.getElementById('kepFeltolt').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          profilKep.src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
      }
    });
  }
}

export default DiakProfilView;
