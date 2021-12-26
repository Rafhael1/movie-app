import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjRlOTI5ZDY1ZDk5NTZlZTM4NDU4OTNjM2YwMDRjNyIsInN1YiI6IjYwMmQyNTY5ZGI0ZWQ2MDA0MDZjMzFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_91gmjzvXfF-3uYy3UevTwm9Xa4riPib1NhgP7_Tpc",
  },
});
