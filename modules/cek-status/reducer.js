export function cekStatusReducer(state, action) {
  const {
    type,
    nomorToken,
    feedbackServer,
    fileList,
    previewImage,
    previewVisible
  } = action;
  switch (type) {
    case "init":
      return {
        nomorToken: nomorToken,
        feedbackServer: feedbackServer,
        fileList: fileList,
        previewImage: previewImage,
        previewVisible: previewVisible
      };
    case "server":
      return {
        ...state,
        feedbackServer: feedbackServer
      };
    case "search":
      return {
        ...state,
        nomorToken: nomorToken
      };
    case "preview":
      return {
        ...state,
        previewImage: previewImage ? previewImage : state.previewImage,
        previewVisible: previewVisible ? previewVisible : state.previewVisible,
        fileList: fileList
      };
    default:
      throw new Error();
  }
}

export function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
