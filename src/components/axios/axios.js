import axios from "axios";

const instance = axios.create({
  baseURL: "https://div-creator-33297.firebaseio.com/",
  headers: {
    "X-Custom-Header": "foobar"
  }
});

export default instance;
