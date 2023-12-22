import axios from "axios";

const BASE_URL = "http://localhost:8080";
const BASE_API = "api/arcs/";

/*Récupérer tous les arcs*/
export function getAllArcs() {
  return axios.get(`${BASE_URL}/${BASE_API}`).then((r) => r.data);
}
