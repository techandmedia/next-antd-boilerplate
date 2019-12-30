import { Table, Divider, Tag } from 'antd';
import data from './fake-data';
import default_columns, {
  column_ujian_tertulis,
  column_ujian_kesehatan,
} from './columns';

export default function PengumumanUjian(props) {
  const columns =
    props.tabKey === 'nomor'
      ? [...default_columns]
      : props.tabKey === 'tertulis'
      ? [...default_columns, ...column_ujian_tertulis]
      : props.tabKey === 'kesehatan' && [
          ...default_columns,
          ...column_ujian_kesehatan,
        ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      // scroll={{ x: 'calc(200px + 50%)', y: 240 }}
    />
  );
}
