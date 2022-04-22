import axios from "axios";

const instance = axios.create({
  baseURL: "https://sajansirweb.herokuapp.com/",
});

export default instance;
