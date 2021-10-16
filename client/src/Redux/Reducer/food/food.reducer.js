import { GET_FOOD_LIST } from "./food.type";

const INITIAL_STATE = {
  foodlist: [],
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        foodlist: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default foodReducer;
