const formRegister = [
  {
    label: "NIK",
    field: "nik",
    placeholder: "Masukkan NIK Anda",
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
    label: "Nama Lengkap",
    field: "nama_lengkap",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Nama Anda!"
      }
    ]
  },
  {
    label: "Tempat Lahir",
    field: "tempat_lahir",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Tempat Lahir!"
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
    field: "alamat_lengkap",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Alamat!"
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
    label: "Warga Negara",
    field: "warga_negara",
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
    label: "Asal Sekolah",
    field: "asal_sekolah",
    rules: [
      {
        required: true,
        message: "Harap Masukkan Asal Sekolah!"
      }
    ]
  },
  {
    label: "Bukti Bayar Ujian Tertulis",
    field: "bukti_bayar_tertulis",
    rules: [
      {
        required: true,
        message: "Harap Upload Bukti Bayar Ujian Tertulis!"
      }
    ], 
    // component: <Input addonAfter={<Icon type="upload" />} />
  }
];

export default formRegister;
