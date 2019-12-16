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

  handleSubmit = e => {
    this.methods.handleSubmit(e, this.props);
  };

  /**
   * ini juga jadi ngga bisa T_T,
   */
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

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
    const {
      form,
      profile,
      loginForm,
      renderForm,
      defaultValue,
      registerForm
    } = this.props;
    const {
      compareToFirstPassword,
      validateToNextPassword,
      handleSubmit
    } = this;

    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <div style={{ textAlign: "left" }}>
            {loginForm ? (
              <h1 style={{ marginBottom: 15 }}>AKSES MASUK</h1>
            ) : registerForm ? (
              <h1 style={{ marginBottom: 15 }}>PENDAFTARAN</h1>
            ) : null}
          </div>

          <NewForm
            form={form}
            profile={profile}
            loginForm={loginForm}
            renderForm={renderForm}
            defaultValue={defaultValue}
            /**
             * Tes
             */
            handleConfirmBlur={this.handleConfirmBlur}
            handleSubmit={handleSubmit}
            compareToFirstPassword={compareToFirstPassword}
            validateToNextPassword={validateToNextPassword}
            Form={Form}
          />
        </Col>
      </Row>
    );
  }
}

const WrappedCustomForm = Form.create({ name: "form" })(CustomForm);

export default WrappedCustomForm;
