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
  loadReview: (productId) => Api.get("api/product/detail/2"),
  writeReview: (productId, contents) => Api.post(`api/review/2`, contents),
  // editReview: (reviewId) => swaggerApi.put(`api/review`),
  deleteReview: (productId, reviewId) => Api.delete(`api/review/2`, reviewId),
};
