import axios from "axios";
import { ANIME_API } from "./config";

function findAll() {
  return axios.get("https://kitsu.io/api/edge/anime");
}

export default {
  findAll,
};
