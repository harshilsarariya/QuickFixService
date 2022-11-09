import axios from "axios";

const client = axios.create({
  baseURL: "https://quickfix-service-app-server.herokuapp.com/api",
});

export default client;
