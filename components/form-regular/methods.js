class Methods {
  /**
   * handleSubmit
   */
  handleSubmit = (e, props) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // this.props.postData("CUSTOM API UNTUK NANTI", {
        //   params: "CUSTOM PARAMS"
        // });
      }
    });
  };

  /**
   * Ngga bisa pake this, jadi ganti aja pakai nama laen wakakkaka
   * handleConfirmBlur
   */
  handleConfirmBlur = (e, newThis) => {
    const { value } = e.target;
    newThis.setState({ confirmDirty: newThis.state.confirmDirty || !!value });
  };

  /**
   * compareToFirstPassword
   * Ngga bisa dipindah full T_T
   */
  compareToFirstPassword = (rule, value, callback, props) => {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  /**
   * validateToNextPassword
   * Ngga bisa dipindah full T_T
   */
  validateToNextPassword = (rule, value, callback, props, state) => {
    const { form } = props;
    if (value && state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
}

export default Methods;
