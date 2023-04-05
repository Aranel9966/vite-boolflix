import { reactive } from "vue";

export const store = reactive({
  movies: [],
  series: [],
  APICast: [],

  serch: "",
  id: "",

  APIbase: "https://api.themoviedb.org/3",

  APIhome: "/discover",
  APIsearch: "/search",

  APIserie: "/tv?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  APIfilm: "/movie?language=it-IT&api_key=e789f8acd81f7b9e6d56be313b261d58",
  //   APIgenre:
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=e789f8acd81f7b9e6d56be313b261d58&language=it-IT",
  //   genre: [],
});
