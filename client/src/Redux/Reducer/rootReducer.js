import { combineReducers } from "redux";
import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./reviews/reviews.reducer";
import user from "./user/user.reducer";

const rootReducer = combineReducers({ restaurant, image, reviews, user });

export default rootReducer;
