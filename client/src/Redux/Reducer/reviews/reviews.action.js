import axios from "axios";

// Redux types
import { GET_REVIEWS, POST_REVIEWS } from "./reviews.type";

export const getReviews = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:4000/reviews/${resId}`,
    });

    return dispatch({ type: GET_REVIEWS, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const postReviews = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `http://localhost:4000/reviews/new`,
    });

    return dispatch({
      type: POST_REVIEWS,
      payload: reviewData,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
