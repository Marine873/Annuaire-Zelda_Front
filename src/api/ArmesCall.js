import axios from "axios";

const BASE_URL = "http://localhost:8080";
const BASE_API = "api/armes/";

/*Récupérer toutes les armes*/
export function getAllArmes() {
  return axios.get(`${BASE_URL}/${BASE_API}`).then((r) => r.data);
}
