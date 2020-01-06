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
    title: 'Lulus',
    dataIndex: 'lulus',
    key: 'lulus',
  },
];

const data = [
  {
    key: '1',
    nama: 'John Brown',
    lulus: 'YA',
  },
  {
    key: '2',
    nama: 'Jim Green',
    lulus: 'YA',
  },
  {
    key: '3',
    nama: 'Joe Black',
    lulus: 'YA',
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
