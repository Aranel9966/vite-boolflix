import { reactive } from "vue";

export const store = reactive({
  //   APIbase:
  //     "https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  //   APIhome:
  //     "https://api.themoviedb.org/3/discover/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  //   APIserie:
  //     "https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  movies: [],
  serch: "",
  serchType: "",

  APIbase: "https://api.themoviedb.org/3",

  APIhome: "/discover",
  APIsearch: "/search",

  APIserie: "/tv?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  APIfilm: "/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
});
