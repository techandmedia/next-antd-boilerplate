import { Input, Select, Button, Checkbox, Icon, Upload } from "antd";
import { tailFormItemLayout, formItemLayout } from "components";

const { Option } = Select;

export default function CustomForm({
  form,
  profile,
  loginForm,
  defaultValue,
  renderForm,
  /**
   * Test
   */
  handleConfirmBlur,
  handleSubmit,
  compareToFirstPassword,
  validateToNextPassword,
  Form
}) {
  const { getFieldDecorator } = form;
  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "62"
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  );

  const password = [
    {
      label: "Password",
      field: "password",
      hasFeedback: true,
      rules: [
        {
          required: true,
          message: "Masukkan kata sandi!"
        },
        {
          validator: validateToNextPassword
        }
      ]
    },
    {
      label: "Konfirmasi Password",
      field: "confirm",
      hasFeedback: true,
      handleConfirmBlur: handleConfirmBlur,
      rules: [
        {
          required: true,
          message: "Masukkan kembali kata sandi anda!"
        },
        {
          validator: compareToFirstPassword
        }
      ]
    }
  ];

  // const formToRender = [...renderForm, ...password];
  const formToRender = [...renderForm];

  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  if (loginForm) {
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        {renderForm.map(item => (
          <Form.Item key={item.field}>
            {getFieldDecorator(item.field, {
              rules: item.rules
            })(
              <Input
                key={item.label}
                prefix={
                  <Icon type={item.icon} style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder={item.placeholder}
              />
            )}
          </Form.Item>
        ))}
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Ingat saya</Checkbox>)}
          <a className="login-form-forgot" href="">
            Lupa <i>password</i>
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Masuk
          </Button>
        </Form.Item>
      </Form>
    );
  }

  return (
    <Form className="register-form" {...formItemLayout} onSubmit={handleSubmit}>
      {formToRender.map((item, index) => {
        /**
         * For Readability, if then else
         * is better than itinerary operator
         */
        if (
          profile &&
          (item.field === "password" || item.field === "confirm")
        ) {
          return null;
        } else {
          return (
            <div>
              <Form.Item
                label={item.label}
                key={item.field}
                hasFeedback={item.hasFeedback}
              >
                {getFieldDecorator(item.field, {
                  initialValue: item.initialValue,
                  rules: item.rules
                })(
                  <Input
                    key={item.label}
                    placeholder={item.placeholder}
                    onBlur={item.handleConfirmBlur}
                    addonBefore={item.addonBefore}
                    style={item.style}
                  />
                )}
              </Form.Item>
              {index === formToRender.length - 1 ? (
                <Form.Item label="Foto">
                  {getFieldDecorator("foto", {
                    valuePropName: "fileList",
                    getValueFromEvent: normFile,
                    rules: [
                      { required: true, message: "Mohon unggah foto kamu!" }
                    ]
                  })(
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                    </Upload.Dragger>
                  )}
                </Form.Item>
              ) : null}
            </div>
          );
        }
      })}

      <div
        // <Form.Item
        style={{ textAlign: "right", marginTop: 30, width: "100%" }}
        // {...tailFormItemLayout}
      >
        <Button type="primary" htmlType="submit">
          {profile ? "Simpan" : "Daftarkan"}
        </Button>
        {/* </Form.Item> */}
      </div>
    </Form>
  );
}
