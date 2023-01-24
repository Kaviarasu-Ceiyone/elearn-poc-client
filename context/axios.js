import axios from "axios";

const token = JSON.parse(window.localStorage.getItem("token"));

axios.defaults.headers.common["Set-Cookie"] = token.token;

export default axios;
