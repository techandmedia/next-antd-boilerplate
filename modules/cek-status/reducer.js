export default function cekStatusReducer(state, action) {
  // console.log(state, action);
  const {
    type,
    data,
    nomorToken,
    feedbackServer,
    proses,
    fileList,
    previewImage,
    previewVisible
  } = action;
  switch (type) {
    case "init":
      return {
        ...state
      };
    case "login-success":
      return {
        ...state,
        isLoggedIn: true,
        data,
        cookie
      };
    case "logout-success":
      return {
        ...state,
        isLoggedIn: false,
        data: [],
        cookie: ""
      };
    default:
      throw new Error();
  }
}
