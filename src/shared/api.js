import axios from "axios";
import { isSession, setSession } from "./Session";
import { getSession } from "./Session";


const Api = axios.create({
  baseURL: "http://13.125.11.137",
});

const swaggerApi = axios.create({
  baseURL: "https://virtserver.swaggerhub.com/Ohjinwoo/clone/1.0.0",
});

const subApi = axios.create({
  baseURL: "https://624ff4c4e3e5d24b34192201.mockapi.io/",
});

Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
    "token"
)}`;

export const Apis = {
  loadDetail: (productId) => Api.get("api/product/detail/2"),
  addCart: (contents, productId) => {
    console.log ("--Run writeReview");
    console.log (contents);
    return Api.post("api/review/2", contents);
  },
  loadReview: (productId) => Api.get("api/product/detail/2"),
  writeReview: (contents, productId) => {
    console.log ("--Run writeReview");
    console.log (contents);
    return Api.post("api/review/2", contents);
  },
  // editReview: (reviewId) => swaggerApi.put(`api/review`),
  deleteReview: (reviewId, productId) => {
    console.log ("--Run deleteReview");
    console.log (reviewId);
    Api.delete("api/review/2", reviewId);
  }
};
