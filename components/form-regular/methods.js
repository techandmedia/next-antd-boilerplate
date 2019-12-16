class Methods {
  /**
   * handleSubmit
   */
  handleSubmit = (e, props) => {
    console.log("PROPS", props);
    const { form, postData, API } = props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        postData(API, {
          username: values.username,
          password: values.password
        });
      }
    });
  };

  /**
   * Ngga bisa pake this, jadi ganti aja pakai nama laen wakakkaka
   * handleConfirmBlur
   */
  handleConfirmBlur = (e, setState, confirmDirty) => {
    const { value } = e.target;
    setState({ confirmDirty: confirmDirty || !!value });
  };

  /**
   * compareToFirstPassword
   * Ngga bisa dipindah full T_T
   */
  compareToFirstPassword = (rule, value, callback, props) => {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Kata sandi dan konfirmasi berbeda!");
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
