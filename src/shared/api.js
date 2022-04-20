import axios from "axios";
import { isSession, setSession } from "./Session";
import { getSession } from "./Session";

// const URL = "";

// //회원가입
// const post_signUP = async (id, pwd, name, phone, address) => {
//     await axios
//         .post(`${URL}/api/signup`), {
//             userID: id,
//             password: pwd,
//             passwordCheck: pwd,

//         })
// }

const Api = axios.create({
  baseURL: "http://13.125.11.137",
});

// const swaggerApi = axios.create({
//   baseURL: "https://virtserver.swaggerhub.com/Ohjinwoo/clone/1.0.0",
// });

// const subApi = axios.create({
//   baseURL: "https://624ff4c4e3e5d24b34192201.mockapi.io/",
// });

Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
    "token"
)}`;

// 임시토큰: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MDM1NjcwNH0.eMNA0owLsEPPp_XtkXhdStH-hERqP1qJei7MPtjt5n8

export const Apis = {
  loadDetail: (productId) => Api.get("api/product/detail/2"),
  loadReview: (productId) => Api.get("api/product/detail/2"),
  writeReview: (contents) => Api.post("api/review/2", contents),
  editReview: (reviewId) => Api.put("api/review"),
  deleteReview: (reviewId) => Api.delete("api/review/2", reviewId),
};