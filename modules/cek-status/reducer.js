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
        ...state,
        nomorToken,
        feedbackServer,
        proses,
        fileList,
        previewImage,
        previewVisible
      };
    case "success":
      return {
        ...state,
        nomorToken,
        feedbackServer,
        proses,
        fileList,
        previewImage,
        previewVisible
      };
    default:
      throw new Error();
  }
}
