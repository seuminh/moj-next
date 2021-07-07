import axios from "axios";

<<<<<<< HEAD
export default axios.create({
   // baseURL: "http://localhost:3000",
   baseURL: "https://moj-next.vercel.app",
=======
const instance = axios.create({
  baseURL: process.env.baseURL,
>>>>>>> upstream/main
});

instance.defaults.withCredentials = true;

export default instance;
