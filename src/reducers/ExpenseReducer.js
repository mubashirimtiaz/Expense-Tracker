import { v4 as uuid } from "uuid";

export const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          amount: Number(action.transaction.amount),
          text: action.transaction.text,
          id: uuid(),
        },
      ];
    case "REMOVE_TRANSACTION":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
