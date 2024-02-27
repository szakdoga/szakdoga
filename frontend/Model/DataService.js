class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
    axios.defaults.withCredentials = true;
    this.token = "";
  }
  async getToken() {
    axios.get("/token").then((response) => {
      console.log(response);
      this.token = response.data;
    });
  }

  getData(url, dataCallback) {
    console.log(url);
    axios
      .get(url)
      .then(function (response) {
        console.log(response);
        dataCallback(response.data);
      })
      .catch(function (error) {
        console.error("Hiba történt:", error);
      });
  }

  async postData(url, data) {
    await this.getToken();
    data._token = this.token;
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
        location.reload(true);

        if (response.data.success) {
          console.log("Adatok sikeresen elküldve a szervernek.");
        } else {
          console.error("Szerver hiba:", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Hiba az adatok küldése közben:", error);
      });
  }

  updateData(vegpont, id, obj) {
    axios
      .put(vegpont + "/" + id, obj)
      .then(function (response) {
        location.reload();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async deleteData(url, id, csrfToken, successCallback, errorCallback) {
    await this.getToken();
    axios
      .delete(url, {
        data: { id: id },
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((response) => {
        location.reload(true);
        console.log("Adatok sikeresen törölve!", response);
        successCallback(response.data);
      })
      .catch((error) => {
        console.error("Hiba történt a törlés során:", error);
        errorCallback(error);
      });
  }

  async bejelentkezes(username, jelszo) {
    try {
        const response = await axios.post('/login', { username, jelszo });
        console.log("Bejelentkezés sikeres!", response.data);
        return response.data;
    } catch (error) {
        console.error("Bejelentkezési hiba:", error.response ? error.response.data : error);
        throw error;
    }
  }

}


export default DataService;
