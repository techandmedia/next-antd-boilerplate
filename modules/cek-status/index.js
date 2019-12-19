import { useState, useEffect } from "react";
import {
  Input,
  Tooltip,
  Icon,
  Skeleton,
  Card,
  Upload,
  Modal,
  Button,
  message,
  Result
} from "antd";
import usePostData from "api/usePostData";
import { capitalize, isEmpty, getBase64, formatBytes } from "utils/helpers";
const { Search } = Input;
const { Meta } = Card;

export default function CekStatus() {
  const [nomorToken, setNoToken] = useState(null);
  const [feedbackServer, setFeedServer] = useState(null);

  const [proses, setProses] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);

  const API = "user/cek-status";
  const [results, postToken] = usePostData();

  useEffect(() => {
    const { isLoading, code, message } = results;
    let text = capitalize(message ? message : "Nomor token tidak dikenali");
    if (!isLoading && code === 200) {
      setFeedServer(text);
    }
    if (!isLoading && code > 200) {
      setFeedServer(text);
    }
  }, [results]);

  const handleSearch = (value, event) => {
    if (!isEmpty(value)) {
      postToken(API, { token: value });
      setNoToken(value);
    }
  };

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const handleProses = status => {
    let okCounter = 0;
    const messages = fileList.map(image => {
      if (image.status === "done") {
        message.success(
          `${image.name} berhasil diunggah (${formatBytes(image.size)})`
        );
        okCounter++;
      } else {
        message.error(
          `${image.name} gagal diunggah (${formatBytes(image.size)})`
        );
      }
    });
    setProses(okCounter > 0 ? true : false);
    return messages;
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  function beforeUpload(file) {
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

  return (
    <div>
      <h1>CEK STATUS</h1>
      <Search
        loading={results.isLoading}
        placeholder="Masukkan nomor token"
        prefix={<Icon type="solution" style={{ color: "rgba(0,0,0,.45)" }} />}
        suffix={
          <Tooltip title="Nomor token yang terkirim ke email pendaftaraan">
            <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
        enterButton
        onSearch={handleSearch}
      />
      {nomorToken && (
        <Card style={{ marginTop: 16 }}>
          <Skeleton loading={results.isLoading} active>
            <Meta
              title={`NOMOR TOKEN : ${nomorToken}`}
              description={<span>{feedbackServer}</span>}
            />
            {results.code === 200 ? (
              proses === true ? ( //harusnya dari server
                <Result
                  style={{ marginTop: "1rem" }}
                  status="success"
                  title="Terima kasih!"
                  subTitle="Verifikasi bukti pembayaran memakan waktu 1-5 hari kerja."
                />
              ) : (
                <div className="clearfix" style={{ marginTop: "1rem" }}>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                  >
                    {fileList.length >= 2 ? null : uploadButton}
                  </Upload>
                  <Button onClick={() => handleProses(fileList)}>Proses</Button>
                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
              )
            ) : null}
          </Skeleton>
        </Card>
      )}
    </div>
  );
}
