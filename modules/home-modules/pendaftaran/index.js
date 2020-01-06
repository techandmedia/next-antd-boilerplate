import { useEffect, useContext } from "react";
import { Form, } from 'antd';
import { Modal, useModal } from "components";
import FormPendaftaran from './Pendaftaran'
import usePostData from "api/usePostData";

function Pendaftaran(props) {
  const { getFieldDecorator, validateFieldsAndScroll } = props.form
  const [results, postNewUser] = usePostData();
  const [modal, dispatchModal] = useModal();

  useEffect(() => {
    const { isLoading, code } = results;

    if (!isLoading && code >= 200 && code < 300) {
      dispatchModal({ type: "success", results });
    }

    if (!isLoading && code >= 300) {
      dispatchModal({ type: "error", results });
    }
  }, [results]);

  function handleSubmit(e) {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {
          nik,
          email,
          nama_lengkap,
          tempat_lahir,
          tanggal_lahir,
          alamat_lengkap,
          warga_negara,
          tinggi_badan,
          berat_badan,
          asal_sekolah,
          bukti_bayar_tertulis } = values

        postNewUser('pendaftaran-ujian/sign-up', {
          nik,
          email,
          nama_lengkap,
          tempat_lahir,
          tanggal_lahir,
          alamat_lengkap,
          warga_negara,
          tinggi_badan,
          berat_badan,
          asal_sekolah,
          bukti_bayar_tertulis,
        });
      }
    });
  };

  return (
    <React.Fragment>
      <Modal modal={modal} dispatchModal={dispatchModal} />
      <FormPendaftaran
        handleSubmit={handleSubmit}
        getFieldDecorator={getFieldDecorator}
      />
    </React.Fragment>
  );
}

const WrappedPendaftaran = Form.create({ name: 'pendaftaran' })(Pendaftaran);

export default WrappedPendaftaran;