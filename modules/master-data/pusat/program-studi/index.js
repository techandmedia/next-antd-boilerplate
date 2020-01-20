import { PageHeader, Table, Card, Icon } from 'antd';
import tableRules from 'table-rules';
import dataSource from './data-source';
import columns from './column';

function ProgramStudyForm(props) {
  const datas = dataSource();
  const column = columns();
  console.log(tableRules);
  return (
    <div>
      <PageHeader
        onBack={() => null}
        backIcon={false}
        title="Program Studi"
        subTitle=""
        bordered={false}
        extra={[]}
      />
      <Card
        bordered={false}
        title="Daftar Program Studi"
        extra={<Icon type="ellipsis" />}
        style={{
          width: '100%',
          borderRadius: '1rem',
          marginTop: '2rem',
        }}
        headStyle={{ borderBottom: 0 }}
      >
        <Table {...tableRules} dataSource={datas} columns={column} />
      </Card>
    </div>
  );
}

export default ProgramStudyForm;
