import axios from "axios";
import { ANIME_API } from "./config";

function findAll() {
  return axios.get(ANIME_API).then((response) => response.data.data);
}

export default {
  findAll,
};
