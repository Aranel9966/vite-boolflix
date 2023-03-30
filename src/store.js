import { reactive } from "vue";

export const store = reactive({
  APIbase:
    "https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  cards: [],
  serch: "",
  APIhome:
    "https://api.themoviedb.org/3/discover/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
});
