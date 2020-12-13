export const API_URL = "https://kitsu.io/api/edge/";
export const ANIME_API =
  API_URL +
  "anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-userCount";
// export const ANIME_API = API_URL + "anime?page[limit]=5&page[offset]=0";
export const ANIME_TRENDING_API = API_URL + "trending/anime?limit=5";
