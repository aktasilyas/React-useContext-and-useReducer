import React from "react";

export default function AuthReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      const user=action.payload;
      localStorage.setItem("user",JSON.stringify(user));
      return {
        ...state,
        user: user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
}
