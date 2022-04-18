import axios from "axios";
import { isSession, setSession } from "./Session";
import { getSession } from "./Session";

const URL = "";

//회원가입
const post_signUP = async (id, pwd, name, phone, address) => {
    await axios
        .post(`${URL}/api/signup`), {
            userID: id,
            password: pwd,
            passwordCheck: pwd,

        })
}