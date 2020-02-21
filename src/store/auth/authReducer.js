import * as types from "./authActionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  token: '',
  userID: '',
  userEmail: '',
  expirySeconds: '',
  expiryDateTime: '',
  msgSuccess: '',
  msgError: ''
};

// counterState or counterReducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...state,
        loading: true,
        msgSuccess: action.payload.msgSuccess,
        msgError: action.payload.msgError
      }
    case types.SIGNIN:
      return {
        ...state,
        loading: true,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
        userID: action.payload.userID,
        userEmail: action.payload.userEmail,
        expirySeconds: action.payload.expirySeconds,
        expiryDateTime: action.payload.expiryDateTime,
        msgSuccess: action.payload.msgSuccess,
        msgError: action.payload.msgError,
      }
    case types.RELOGIN:
      return {
        ...state,
        loading: true,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
        userID: action.payload.userID,
        userEmail: action.payload.userEmail,
        expirySeconds: action.payload.expirySeconds,
        expiryDateTime: action.payload.expiryDateTime,
        msgSuccess: '',
        msgError: ''
      }
    case types.LOGOUT:
      return {
        ...state,
        loading: true,
        isAuthenticated: action.payload.authenticated,
        token: action.payload.token,
        userID: action.payload.userID,
        userEmail: action.payload.userEmail,
        expirySeconds: action.payload.expirySeconds,
        expiryDateTime: action.payload.expiryDateTime,
        msgSuccess: action.payload.msgSuccess,
        msgError: action.payload.msgError
      }
    case types.LOADED:
      return {
        ...state,
        loading: false
      }
      case types.ERROR:
        return {
          ...state,
          msgError: action.payload,
          msgSuccess: ''
        }
      case types.SUCCESS:
        return {
          ...state,
          msgSuccess: action.payload,
          msgError: ''
        }
    default:
      return state;
  }
}

export default authReducer;
