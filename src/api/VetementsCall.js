import axios from "axios";

const BASE_URL = "http://localhost:8080";
const BASE_API = "api/vetements/";

/*Récupérer tous les arcs*/
export function getAllVetements() {
  return axios.get(`${BASE_URL}/${BASE_API}`).then((r) => r.data);
}
