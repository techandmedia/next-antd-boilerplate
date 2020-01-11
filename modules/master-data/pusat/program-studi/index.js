import { PageHeader, Table, Card, Icon } from "antd";
import dataSource from "./data-source";
import columns from "./column";

function ProgramStudyForm(props) {
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
          width: "100%",
          borderRadius: "1rem",
          marginTop: "2rem"
        }}
        headStyle={{ borderBottom: 0 }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
}

export default ProgramStudyForm;
