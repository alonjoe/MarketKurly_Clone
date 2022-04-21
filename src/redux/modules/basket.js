import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션타입
const ADD_BASKET = "ADD_BASKET";
const GET_BASKET = "GET_BASKET";
const DELETE_GOODS = "DELETE_GOODS";

const initialState = {
  list: [],
}

// 액션생성함수
const addBasket = createAction(ADD_BASKET, (basket) => ({ basket }));
const getBasket = createAction(GET_BASKET, (basket) => ({ basket }));
const deleteGoods = createAction(DELETE_GOODS, (basket) => ({ basket }));

// 미들웨어 ------------------------------------------------------------------------------

// 신상품 장바구니에 추가하기 
const addNewBasketDB = (productnewId, quantity) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios({
      method: "POST",
      url: `http://13.125.11.137/api/cart/new/${productnewId}`,
      data: {
        amount: quantity,
      },
      headers: {
        Authorization : `Bearer ${token}`,
      }
    }).then((response) => {
      window.alert("장바구니에 추가되었습니다!");
    }).catch((error) => {
      console.log(error);
    })
  }
}
// 베스트상품 장바구니에 추가하기
const addBestBasketDB = (productbestId, quantity) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios({
      method: "POST",
      url: `http://13.125.11.137/api/cart/best/${productbestId}`,
      data: {
        amount: quantity,
      },
      headers: {
        Authorization : `Bearer ${token}`,
      }
    }).then((response) => {
      window.alert("장바구니에 추가되었습니다!");
    }).catch((error) => {
      console.log(error);
    })
  }
}

// 장바구니페이지 입장시 장바구니에 추가된 항목들 불러오기
const getBasketDB = () => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios({
      method: "GET",
      url: "http://13.125.11.137/api/cart",
      headers: {
        Authorization : `Bearer ${token}`,  // 토큰없어서 500에러 떴었음
      }
    }).then((response) => {
      let itemList = [];
      const items = response.data.carts;
      items.forEach((item) => {
        itemList.push({ cartId: item.cartId, ...item });
      })
      dispatch(getBasket(itemList));
    }).catch((error) => {
      console.log(error);
    })
  }
}

// 장바구니페이지 상품 삭제
const deleteGoodsDB = (cartId) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios({
      method: "DELETE",
      url: `http://13.125.11.137/api/cart`,
      data: {
        cartId: cartId,
      },
      headers: {
        Authorization : `Bearer ${token}`,  // 토큰없어서 500에러 떴었음
      }
    }).then((response) => {
      dispatch(deleteGoods(cartId));
      window.location.href="/basket"
    }).catch((error) => {
      console.log(error);
    })
  }
}
// ----------------------------------------------------------------------------------------

// 리듀서
export default handleActions(
  {
    // [ADD_BASKET]: (state, action) => produce(state, draft => {
    //   // console.log("장바구니에 추가!");
    //   draft.list = action.payload.basket;  차라리 push를 해도. typeError는 타입이 다를떄.
    // }),
    [GET_BASKET]: (state, action) => produce(state, draft => {
      // console.log("추가된 상품 가져왔다.");
      draft.list = action.payload.basket;
    }),
    [DELETE_GOODS]: (state, action) => produce(state, draft => {
      let newGoodsList = draft.list.filter(
        p => p.cartId !== action.payload.cartId
      );
      draft.list = newGoodsList;
    })
  },
  initialState
)

const actionsCreators = {
  addBasket,
  addNewBasketDB,
  addBestBasketDB,
  getBasket,
  getBasketDB,
  deleteGoods,
  deleteGoodsDB,
}

export { actionsCreators }