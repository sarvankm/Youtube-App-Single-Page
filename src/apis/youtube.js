import axios from "axios";

const KEY = "AIzaSyADbx9Oey4Q6daQzplBVdRflky0ylrSBdY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
