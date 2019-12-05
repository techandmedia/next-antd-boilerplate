import { Form, Row, Col } from "antd";
import Methods from "./methods";
import NewForm from "./Form";

class CustomForm extends React.Component {
  constructor() {
    super();
    this.methods = new Methods();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  /**
   * 2 biji ini ngga bisa pakai functional component,
   * ngga bisa dipindah full, seadanya lah
   */
  compareToFirstPassword = (rule, value, callback) => {
    this.methods.compareToFirstPassword(rule, value, callback, this.props);
  };

  validateToNextPassword = (rule, value, callback) => {
    this.methods.validateToNextPassword(
      rule,
      value,
      callback,
      this.props,
      this.state
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { defaultValue, profile, loginForm, registerForm } = this.props;
    const { compareToFirstPassword, validateToNextPassword, methods } = this;

    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            {loginForm ? (
              <h1>Login</h1>
            ) : registerForm ? (
              <h1>Account Registration</h1>
            ) : null}
          </div>
          {/* <Modal modal={modal} dispatchModal={dispatchModal} /> */}

          <NewForm
            profile={profile}
            methods={methods}
            loginForm={loginForm}
            registerForm={registerForm}
            defaultValue={defaultValue}
            getFieldDecorator={getFieldDecorator}
            compareToFirstPassword={compareToFirstPassword}
            validateToNextPassword={validateToNextPassword}
          />
        </Col>
      </Row>
    );
  }
}

const WrappedCustomForm = Form.create({ name: "form" })(CustomForm);

export default WrappedCustomForm;
