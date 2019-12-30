import { Table, Divider, Tag } from 'antd';

const columns = [
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
  {
    title: 'Lulus',
    dataIndex: 'status_ujian_tertulis',
    key: 'status_ujian_tertulis',
  },
];

const data = [
  {
    key: '1',
    nama: 'John Brown',
    nomor_ujian: 'BI.191001',
    status_ujian_tertulis: 'lulus',
  },
  {
    key: '2',
    nama: 'Jim Green',
    nomor_ujian: 'BI.191002',
    status_ujian_tertulis: 'tidak lulus',
  },
  {
    key: '3',
    nama: 'Joe Black',
    nomor_ujian: 'BI.191003',
    status_ujian_tertulis: 'lulus',
  },
];

export default function UjianTertulis() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      // scroll={{ x: 'calc(200px + 50%)', y: 240 }}
    />
  );
}
