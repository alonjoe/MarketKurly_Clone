import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/api";

import moment from "moment";

import axios from "axios";


// 액션타입
const GET_Review = "GET_Review";
const WRITE_Review = "WRITE_Review";
const EDIT_Review = "EDIT_Review";
const DELETE_Review = "EDIT_Review";


// 액션생성함수 
const getReview = createAction(GET_Review, (review) => ({ review }));
const writeReview = createAction(WRITE_Review, (review) => ({ review }));
const editReview = createAction(EDIT_Review, (review) => ({ review }));
const deleteReview = createAction(DELETE_Review, (review) => ({ review }));

const initialState = {
  review: "",
}



const initialReview = {
  title: "he",
  content: "",
  userId: "",
  userName: "",
  createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
  productId: "",
  reviewid: "",
};

// a.sort(function (a, b) { return b - a })


// 미들웨어 (서버와 통신하는 함수. 줄거, 받아올거)
const getReviewDB = () => {
  return function (dispatch, getState, {history}) {
    Apis.loadReview()
    .then(function (response) {
      let post_list = response.data.reviewList.map((review) => {
        let keys = Object.keys(initialReview);
        let _post = keys.reduce(
          (acc, cur) => {
            return { ...acc, [cur]: review[cur] };
          },
          { postId: review._id }
        );
        return _post;
      });
      dispatch(getReview(post_list));
    })
    .catch(function (error) {
      console.log(error);
      console.log("실패")
    });
  }
}

const writeReviewDB = (inputTitle, inputContent) => {
  return function (dispatch, getState, {history}) {
    const postReview = {
      title: inputTitle,
      content: inputContent,
    };
    console.log(postReview)
    Apis.writeReview(postReview)
    .then(function (response) {
      console.log(response);
      alert(response.data.msg);
      history.goBack();
      })
    .catch(function (error) {
      console.log(error);
      console.log("실패");
    });
  }
}

const editReviewDB = (inputTitle, inputContent) => {
  return function (dispatch, getState, {history}) {
    console.log({...initialReview}) 
    const postReview = {
      title: inputTitle,
      content: inputContent,
    };
    console.log(postReview)
    Apis.writeReview(postReview)
    .then(function (response) {
      console.log(response)
      })
    .catch(function (error) {
      console.log(error);
      console.log("실패")
    });
  }
}

const deleteReviewDB = (reviewId) => {
  console.log(reviewId);
  return function (dispatch, getState, {history}) {
    // const reviewIdData = {
    //   "reviewId": "80",
    // }
    // console.log(reviewIdData)
    // Apis.deleteReview(reviewIdData)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }
    //   console.log(error.config);
    // });

    axios({
      method: "delete",
      url: "http://13.125.11.137/api/review/2",
      data: {
        reviewId: reviewId,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    // .delete("http://13.125.11.137/api/review/2", // 미리 약속한 주소
    //   {
    //     reviewId: reviewId,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`
    //     },
    //   },
    //   )
      .then(function (response) {
        console.log(response);
        alert(response.data.msg);
        window.location.reload();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    
  }
}


// 리듀서 (리덕스에 담는곳)
export default handleActions(
  {
    [GET_Review]: (state, action) => produce(state, (draft) => {
      draft.review = action.payload.review;
    }),
    [WRITE_Review]: (state, action) => produce(state, (draft) => {
      console.log("리뷰 작성")
      draft.review.unshift(action.payload.review);
    }),
    [EDIT_Review]: (state, action) => produce(state, (draft) => {
      console.log("리뷰 수정")
      let idx = draft.review.findIndex((p) => p.id === action.payload.post_id);
      draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      draft.review = action.payload.review;
    }),
    [DELETE_Review]: (state, action) => produce(state, (draft) => {
      console.log("리뷰 삭제");
      let new_review_list = draft.review.filter(
        (review) => review.reivewId !== action.payload.reivewId
      );
      draft.review = [...new_review_list];
    }),
  },
  initialState
)

const reviewCreators = {
  getReviewDB,
  writeReviewDB,
  editReviewDB,
  deleteReviewDB,
}

export { reviewCreators }