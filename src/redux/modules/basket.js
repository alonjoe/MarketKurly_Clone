import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션타입
const ADD_BASKET = "ADD_BASKET";



const initialState = {
  list: [],
}

// 액션생성함수
const addBasket = createAction(ADD_BASKET, (basket) => ({ basket }));


// 미들웨어
const addBasketDB = (productId, quantity) => {
  return function (dispatch) {
    axios({
      method: "POST",
      url: `http://13.125.11.137/api/modal/cart/productId`,
      data: {
        productId: productId,
        amount: quantity,
      },
      headers: {
        
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
}


// 리듀서
export default handleActions(
  {
    [ADD_BASKET]: (state, action) => produce(state, draft => {
      console.log("장바구니에 추가!");
      draft.list = action.payload.basket;
    }),
  },
  initialState
)

const actionsCreators = {
  addBasket,
  addBasketDB,
}

export { actionsCreators }