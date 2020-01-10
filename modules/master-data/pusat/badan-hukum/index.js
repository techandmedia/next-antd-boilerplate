import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  PageHeader,
  Typography,
  Card
} from "antd";
const { Option } = Select;
const { Title } = Typography;
const AutoCompleteOption = AutoComplete.Option;

function LegalForm(props) {
  const { getFieldDecorator } = props.form;

  function handleSubmit() {}

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <PageHeader
        onBack={() => null}
        backIcon={false}
        title="Badan Hukum"
        subTitle=""
        bordered={false}
        extra={[]}
      />
      <Row gutter={48}>
        <Col xs={24} md={12} lg={12}>
          <Card
            style={{
              width: "100%",
              borderRadius: "1rem"
            }}
            headStyle={{ borderBottom: 0 }}
            bordered={false}
          >
            {/* IDENTITAS START */}
            <Title level={4}>Identitas</Title>
            <Col span={24}>
              <Form.Item label={<span>Kode</span>}>
                {getFieldDecorator("kode", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan kode badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Nama</span>}>
                {getFieldDecorator("nama", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan nama badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Tanggal Berdiri</span>}>
                {getFieldDecorator("tgl_berdiri", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan tanggal berdiri badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            {/* IDENTITAS END */}
            {/* AKTA START */}
            <Title level={4}>Akta Terakhir</Title>
            <Col span={24}>
              <Form.Item label={<span>Akta</span>}>
                {getFieldDecorator("akta", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan akta terakhir badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Tanggal</span>}>
                {getFieldDecorator("tgl_akta", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan tanggal akta terakhir badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            {/* AKTA END */}
            {/* PENGESAHAN START */}
            <Title level={4}>Pengesahan</Title>
            <Col span={24}>
              <Form.Item label={<span>Nomor</span>}>
                {getFieldDecorator("nomor", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan nomor terakhir badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Tanggal</span>}>
                {getFieldDecorator("tgl_pengesahan", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan tanggal pengesahan badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            {/* PENGESAHAN END */}
            {/* ALAMAT START */}
            <Title level={4}>Alamat</Title>
            <Col span={24}>
              <Form.Item label={<span>Jalan</span>}>
                {getFieldDecorator("jalan", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan jalan terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Kota / Kabupaten</span>}>
                {getFieldDecorator("kota", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan kota terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Propinsi</span>}>
                {getFieldDecorator("propinsi", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan propinsi terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Pos</span>}>
                {getFieldDecorator("pos", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan pos terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Telepon</span>}>
                {getFieldDecorator("telepon", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan telepon terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Faximil</span>}>
                {getFieldDecorator("fax", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan fax terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Email</span>}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan email terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label={<span>Website</span>}>
                {getFieldDecorator("website", {
                  rules: [
                    {
                      required: true,
                      message: "Masukkan website terdaftar di badan hukum!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            {/* ALAMAT END */}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}

const WrappedLegalForm = Form.create({ name: "badan-hukum" })(LegalForm);

export default WrappedLegalForm;
