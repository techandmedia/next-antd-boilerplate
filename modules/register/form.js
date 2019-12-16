const formRegister = [
  {
    label: "NIK",
    field: "nik",
    placeholder: "Masukkan NIK Anda",
    // initialValue: profile ? defaultValue.user_name : "",
    rules: [
      {
        required: true,
        message: "Harap Masukkan NIK Anda!"
      }
    ]
  },
  {
    label: "E-Mail",
    field: "email",
    placeholder: "Masukkan email Anda",
    // initialValue: profile ? defaultValue.user_name : "",
    rules: [
      {
        type: "email",
        message: "Format E-mail tidak valid!"
      },
      {
        required: true,
        message: "Harap Masukkan Email Anda!"
      }
    ]
  },
  {
    label: "Nama Depan",
    field: "nama_depan",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Nama Depan!"
      }
    ]
  },
  {
    label: "Nama Belakang",
    field: "nama_belakang",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Nama Belakang!"
      }
    ]
  },
  {
    label: "Tanggal Lahir",
    field: "tanggal_lahir",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Tanggal Lahir!"
      }
    ]
  },
  {
    label: "Alamat",
    field: "alamat",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Alamat!"
      }
    ]
  },
  {
    label: "Kode Pos",
    field: "id_kelurahan",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Kode Pos!"
      }
    ]
  },
  {
    label: "Warga Negara",
    field: "id_warga_negara",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Warga Negara!"
      }
    ]
  },
  {
    label: "Tinggi Badan",
    field: "tinggi_badan",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Tinggi Badan!"
      }
    ]
  },
  {
    label: "Berat Badan",
    field: "berat_badan",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Berat Badan!"
      }
    ]
  },
  {
    label: "Nomor HP",
    field: "nomor_hp",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Nomor HP!"
      }
    ]
  },
  {
    label: "Asal Sekolah",
    field: "id_asal_sekolah",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Asal Sekolah!"
      }
    ]
  }
];

export default formRegister;
