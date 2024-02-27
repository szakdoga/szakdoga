class DataService {
    constructor() {
      axios.defaults.baseURL='http://localhost:8000/';
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

    postData(url, data, csrfToken) {
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
    
    deleteData(url, id, csrfToken, successCallback, errorCallback) {
      axios
          .delete(url, {
              data: { id: id }, 
              headers: {
                  "X-CSRF-TOKEN": csrfToken
              }
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
}

export default DataService;