class Methods {
  /**
   * handleSubmit
   */
  handleSubmit = (e, form, dispatchModal) => {
    e.preventDefault();
    // const { form } = props;
    // console.log(props);
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // props.postData("CUSTOM API UNTUK NANTI", {
        //   params: "CUSTOM PARAMS"
        // });

        if (values.password === "111") {
          console.log("Received values of form: ", values);
          const results = {
            status: "Success",
            message: "Anda berhasil Login Lho keren kan"
          };
          dispatchModal({ type: "success", results });
        }
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
