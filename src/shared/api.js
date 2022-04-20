import axios from "axios";
import { isSession, setSession } from "./Session";
import { getSession } from "./Session";

const URL = "http://13.125.11.137";

const h = () => {
  return { Authorization: `Bearer ${getSession()}` };
};

// 로그인
const post_login = async (id, pwd) => {
  const result = await axios
    .post(`${URL}/api/login`, { userId: id, password: pwd })
    .then(res => {
      setSession(res.data.token);
      const userinfo = res.data.userinfo;

      return userinfo;
    })
    .catch(err => {
      console.log(err);
    });

  return result;
};

//회원가입
const post_signUp = async (id, pwd, name, address) => {
  await axios
    .post(`${URL}/api/signup`, {
      userId: id,
      userName: name,
      password: pwd,
      passwordCheck: pwd,
      address: address,
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return { error: "회원가입 실패" };
};


const Api = axios.create({
    baseURL: "https://virtserver.swaggerhub.com/Ohjinwoo/clone/1.0.0",
});

const subApi = axios.create({
  baseURL: "https://624ff4c4e3e5d24b34192201.mockapi.io/",
});

Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
    "token"
)}`;

export const Apis = {
  loadDetail: (productId) => Api.get(`api/product/detail/productId`),
  loadReview: (productId) => subApi.get(`review`),
};

const api = {
  post_login,
  post_signUp
}

export { api };