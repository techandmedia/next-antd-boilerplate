import { useState, useEffect, useReducer } from "react";
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
  Result, Tabs
} from "antd";
import usePostData from "api/usePostData";
import { cekStatusReducer, beforeUpload } from "./reducer";
import { capitalize, isEmpty, getBase64, formatBytes } from "utils/helpers";
import UjianTertulis from "./ujian-tertulis";
const { Search } = Input;
const { Meta } = Card; const { TabPane } = Tabs;

export default function CekStatus() {
  const [state, dispatch] = useReducer(cekStatusReducer, {
    type: "init",
    nomorToken: null,
    feedbackServer: null,
    fileList: [],
    previewImage: "",
    previewVisible: false
  });

  const API = "user/cek-status";
  const [results, postToken] = usePostData();

  useEffect(() => {
    const { isLoading, code, message } = results;
    let text = capitalize(message ? message : "Nomor token tidak dikenali");
    if (!isLoading && code === 200) {
      dispatch({ type: "server", feedbackServer: text });
    }
    if (!isLoading && code > 200) {
      dispatch({ type: "server", feedbackServer: text });
    }
  }, [results]);

  const handleSearch = (value, event) => {
    if (!isEmpty(value)) {
      postToken(API, { token: value });
      dispatch({ type: "search", nomorToken: value });
    }
  };

  const handleCancel = () =>
    dispatch({
      type: "preview",
      previewVisible: false
    });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    dispatch({
      type: "preview",
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  const handleChange = ({ fileList }) =>
    dispatch({ type: "preview", fileList: fileList });

  const [proses, setProses] = useState(false);
  const handleProses = status => {
    let okCounter = 0;
    const messages = state.fileList.map(image => {
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
    setProses(true);
    return messages;
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  function callback(key) {
    console.log(key);
  }

  return (
    <div>
      <h1>Daftar Pengumuman Kelulusan Ujian</h1>
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
      <Tabs onChange={callback} type="card">
        <TabPane tab="Tertulis" key="1">
          <UjianTertulis />
        </TabPane>
        <TabPane tab="Kesehatan" key="2">Under Construction
    </TabPane>
      </Tabs>
      {state.nomorToken && (
        <Card style={{ marginTop: 16 }}>
          <Skeleton loading={results.isLoading} active>
            <Meta
              title={`NOMOR TOKEN : ${state.nomorToken}`}
              description={<span>{state.feedbackServer}</span>}
            />
            {results.code === 200 ? (
              results.data.proses === true || proses === true ? ( //harusnya dari server
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
                      {state.fileList.length >= 2 ? null : uploadButton}
                    </Upload>
                    <Button onClick={() => handleProses(state.fileList)}>
                      Proses
                  </Button>
                    <Modal
                      visible={state.previewVisible}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={state.previewImage}
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
