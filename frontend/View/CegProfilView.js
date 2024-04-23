class CegProfilView {
    #adat = [];
    constructor(szuloElem, adat) {
      this.szuloElem = szuloElem;
      this.#adat = adat;
      this.cegAdatMegj();
    }
  
    cegAdatMegj() {
        let data = this.#adat[0]; // 0. elem, mert csak egy céget kérünk le
        let html = `
          <h1>${data.neve}</h1>
          <h2>Elérhetőségek</h2>
          <p>Emailcím: ${data.email}</p>
          <p class="bord">Telefonszám: ${data.tel}</p>
          <h2>Kapcsolattartó neve</h2>
          <p class="bord">${data.kapcsNeve}</p>
          <h2>Cím</h2>
          <p>${data.cim}</p>
 
       
        `;
      
        this.szuloElem.html(html);
      }
  }
  
  export default CegProfilView;
  