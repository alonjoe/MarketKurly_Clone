import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/api";

// 액션타입
const GET_Review = "GET_Review";


// 액션생성함수 
const getReview = createAction(GET_Review, (review) => ({ review }));

const initialState = {
  review: ""
}

const initialReview = {
  title: "우유가 터져서왔어요",
  content: "맛있어요",
  userId: "dudgh123@naver.com",
  userName: "김혜순",
  createdAt: "2021-10-19 00:00:00",
  productId: "12",
  reviewId: "12"
};

// 미들웨어 (서버와 통신하는 함수. 줄거, 받아올거)


const getReviewDB = () => {
  return function (dispatch, getState, {history}) {
    Apis.loadReview()
    .then(function (response) {
      console.log(response.data);
      let post_list = response.data.map((post) => {
        let keys = Object.keys(initialReview);
        let _post = keys.reduce(
            (acc, cur) => {
                return { ...acc, [cur]: post[cur] };
            },
            { postId: post._id }
        );

        return _post;
      });
      dispatch(getReview(post_list));
      console.log("성공")
    })
    .catch(function (error) {
      console.log(error);
      console.log("실패")
    });
  }
}


// 리듀서 (리덕스에 담는곳)
export default handleActions(
  {
    [GET_Review]: (state, action) => produce(state, (draft) => {
      console.log("리뷰 가져왔다.")
      draft.review = action.payload.review;
    }),
  },
  initialState
)

const reviewCreators = {
  getReview,
  getReviewDB,
}

export { reviewCreators }