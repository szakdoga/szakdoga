

class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
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

  async postData(url, data) {
    try {
      await this.getToken();
      data._token = this.token;
      const response = await axios.post(url, data);
      console.log("RESP", response);
      location.reload(true);

      if (response.data.success) {
        console.log("Adatok sikeresen elküldve a szervernek.");
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
}

export default DataService;
