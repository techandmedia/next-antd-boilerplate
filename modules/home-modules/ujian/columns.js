const column_ujian_tertulis = [
  {
    title: 'Status',
    dataIndex: 'status_ujian_tertulis',
    key: 'status_ujian_tertulis',
  },
];

const column_ujian_kesehatan = [
  {
    title: 'Status',
    dataIndex: 'status_ujian_kesehatan',
    key: 'status_ujian_kesehatan',
  },
];

const default_columns = [
  {
    title: 'No',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Nama',
    dataIndex: 'nama',
    key: 'nama',
  },
  {
    title: 'Nomor Ujian',
    dataIndex: 'nomor_ujian',
    key: 'nomor_ujian',
  },
];

export default default_columns
export { column_ujian_tertulis, column_ujian_kesehatan }