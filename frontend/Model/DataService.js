class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000";
    axios.defaults.withCredentials = true;
    this.token = "";
  }

  async getToken() {
    try {
      const response = await axios.get("/token");
      console.log(response);
      this.token = response.data;
    } catch (error) {
      console.error("Hiba történt a token lekérése közben:", error);
    }
  }

  async getData(url, dataCallback) {
    console.log(url);
    try {
      const response = await axios.get(url);
      console.log(response);
      dataCallback(response.data);
    } catch (error) {
      console.error("Hiba történt:", error);
    }
  }

  async postData(url, adat) {
    try {
      /*await this.getToken();
      data._token = this.token;*/
      console.log(url);
      console.log(adat);
      const response = await axios.post(url, adat);
      return response.data;
    } catch (error) {
      console.error("Hiba az adatok küldése közben:", error);
    }
  }
  async postData2(url, data) {
    try {
      await this.getToken();
      data._token = this.token;
      const response = await axios.post(url, data);
      if (response.data.success) {
        console.log("Adatok sikeresen elküldve a szervernek.");
        if (data.jogId === 1) {
          window.location.href = "diak.html";
        } else if (data.jogId === 2) {
          window.location.href = "ceg.html";
        }
      } else {
        console.error("Szerver hiba:", response.data.error);
      }
    } catch (error) {
      console.error("Hiba az adatok küldése közben:", error);
    }
  }

  async updateData(vegpont, id, obj) {
    try {
      await this.getToken();
      const response = await axios.put(`${vegpont}/${id}`, obj);
      location.reload();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteData(url, id, csrfToken, successCallback, errorCallback) {
    try {
      await this.getToken();
      const response = await axios.delete(url, {
        data: { id: id },
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      });
      location.reload(true);
      console.log("Adatok sikeresen törölve!", response);
      successCallback(response.data);
    } catch (error) {
      console.error("Hiba történt a törlés során:", error);
      errorCallback(error);
    }
  }

  async bejelentkezes(felNev, jelszo) {
    this.getToken();
    console.log(`Küldött adatok: felhasználónév: ${felNev}, jelszó: ${jelszo}`);
    try {
      const response = await axios.post("/login", {
        felNev: felNev,
        jelszo: jelszo,
        _token: this.token,
      });

      localStorage.setItem("bejelentkezett", "true");
      window.location.href = "index.html";



    } catch (error) {
      console.error(
        "Bejelentkezési hiba:",
        error.response ? error.response.data : error
      );
      return { success: false, message: "Bejelentkezési hiba" };
    }
  }

  async getCegek() {
    try {
      const response = await axios.get("/api/cegek/nevid");
      return response.data;
    } catch (error) {
      console.error("Hiba történt a cégek lekérdezése közben:", error);
      return [];
    }
  }

  async getDiakok() {
    try {
      const response = await axios.get("/api/diakok/nevid");
      return response.data;
    } catch (error) {
      console.error("Hiba történt a diákok lekérdezése közben:", error);
      return [];
    }
  }
  async postCegDiakKapcsolat(adat) {
    try {
      const response = await axios.post("/api/kapcsolatok/create", adat);
      console.log("Kapcsolat sikeresen létrehozva:", response.data);
      return response.data;
    } catch (error) {
      console.error("Hiba történt a kapcsolat létrehozása közben:", error);
      throw error;
    }
  }

  async getJogId(felNev){
    try {
      const response = await axios.post(`/api/getJogId/${felNev}`);
      return response.data;
    } catch (error) {
      console.error("Hiba történt a jogosultság lekérdezése közben:", error);
    }
  }
}

export default DataService;
