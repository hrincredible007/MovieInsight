import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = process.env.REACT_APP_API_KEY;
console.log(API_TOKEN);

const headers = {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${API_TOKEN}`
};

const fetchDataFromAPI = async (url, params) => {
  try {
       const response = await axios.get(BASE_URL+ url, {headers, params});
      //  console.log("API\t",response.data);
       return response.data;
  }
   catch (error) {
    console.log(error);
    return error;
  }
};
export default fetchDataFromAPI;
