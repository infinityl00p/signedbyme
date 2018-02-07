var axios = require('axios');
const ROOT_URL = 'http://localhost:4000/';
const UID = 1;

const api = {
  GetContracts: async function() {
    return await axios.get(ROOT_URL + "api/users/" + UID + "/contracts")
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {

    })
  },

  PostContract: async function(newContract) {
    return await axios.post(ROOT_URL + "api/users/" + UID + "/contracts", {
      contract: newContract
    })
    .then(async (response) => {
      return response.data.cid
    })
    .catch((error) => {

    })
  }
}

export default api;