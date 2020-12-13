import axios from "axios";
import { ANIME_API, ANIME_TRENDING_API } from "./config";

function findAll() {
  return axios.get(ANIME_API).then((response) => response.data.data);
}
function findTrendingAnime() {
  return axios.get(ANIME_TRENDING_API).then((response) => response.data.data);
}

export default {
  findAll,
  findTrendingAnime,
};
