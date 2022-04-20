import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션타입
const ADD_BASKET = "ADD_BASKET";
const GET_BASKET = "GET_BASKET";


const initialState = {
  list: [],
}

// 액션생성함수
const addBasket = createAction(ADD_BASKET, (basket) => ({ basket }));
const getBasket = createAction(GET_BASKET, (basket) => ({ basket }));


// 미들웨어 ------------------------------------------------------------------------------

// 장바구니에 추가하기 
const addBasketDB = (productId, quantity) => {
  console.log(productId, quantity)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1MDQ0MTAzNn0.B4h7BPxdmnW7V6zUlcNTkiIRONZcjMQlC_mKytC1gAI";
  return function (dispatch) {
    axios({
      method: "POST",
      url: `http://13.125.11.137/api/cart/${productId}`,
      data: {
        amount: quantity,
      },
      headers: {
        Authorization : `Bearer ${token}`,
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
    console.log(token);
  }
}

// 장바구니페이지 입장시 장바구니에 추가된 항목들 불러오기
const getBasketDB = () => {
  return function (dispatch) {
    axios({
      method: "GET",
      url: "http://13.125.11.137/api/cart",
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
}
// ----------------------------------------------------------------------------------------

// 리듀서
export default handleActions(
  {
    [ADD_BASKET]: (state, action) => produce(state, draft => {
      console.log("장바구니에 추가!");
      draft.list = action.payload.basket;
    }),
    [GET_BASKET]: (state, action) => produce(state, draft => {
      console.log("추가된 상품 가져왔다.");
      draft.list = action.payload.basket;
    })
  },
  initialState
)

const actionsCreators = {
  addBasket,
  addBasketDB,
  getBasket,
  getBasketDB,
}

export { actionsCreators }