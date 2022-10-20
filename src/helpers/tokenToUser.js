import jwt_decode from "jwt-decode";

export const tokenToUser = (token) => {
  return jwt_decode(token);
};
