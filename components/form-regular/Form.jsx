import Link from "next/link";
import { Input, Select, Button, Checkbox, Icon } from "antd";
import { tailFormItemLayout, formItemLayout } from "components";

const { Option } = Select;

export default function CustomForm({
  form,
  profile,
  loginForm,
  registerForm,
  defaultValue,
  renderForm,
  /**
   * Test
   */
  methods,
  handleSubmit,
  compareToFirstPassword,
  validateToNextPassword,
  setState,
  confirmDirty,
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

  const formToRender = [
    {
      label: "E-Mail",
      field: "username",
      placeholder: "Email will be your user name",
      initialValue: profile ? defaultValue.user_name : "",
      rules: [
        {
          type: "email",
          message: "E-mail anda tidak valid!"
        },
        {
          required: true,
          message: "Mohon masukkan email anda!"
        }
      ]
    },
    {
      label: "Nama Lengkap",
      field: "fullname",
      initialValue: profile ? defaultValue.user_full_name : "",
      rules: [
        {
          required: true,
          message: "Masukkan nama lengkap anda!"
        }
      ]
    },
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
      handleConfirmBlur: e =>
        methods.handleConfirmBlur(e, setState, confirmDirty),
      rules: [
        {
          required: true,
          message: "Masukkan kembali kata sandi anda!"
        },
        {
          validator: compareToFirstPassword
        }
      ]
    },
    {
      label: "Alamat",
      field: "address",
      initialValue: profile ? defaultValue.user_address : ""
    },
    {
      label: "Nomor Telepon",
      field: "phone",
      addonBefore: prefixSelector,
      initialValue: profile ? defaultValue.user_phone_number : "",
      style: { width: "100%" }
    }
  ];

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
      {formToRender.map(item => {
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
