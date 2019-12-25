import { Row, Col, Card, PageHeader, Icon, Tag } from "antd";
import { GridMenu } from "components";
const menu = [
  {
    icon: <Icon type="file-done" />,
    name: "Kurikulum"
  },
  {
    icon: <Icon type="read" />,
    name: "Mata Kuliah"
  },
  {
    icon: <Icon type="percentage" />,
    name: "Bobot Nilai"
  },
  {
    icon: <Icon type="number" />,
    name: "Predikat"
  },
  {
    icon: <Icon type="laptop" />,
    name: "Fasilitas Penunjang"
  },
  {
    icon: <Icon type="paper-clip" />,
    name: "Batas SKS"
  },
  {
    icon: <Icon type="team" />,
    name: "Kelas"
  },
  {
    icon: <Icon type="clock-circle" />,
    name: "Jam Kuliah"
  },
  {
    icon: <Icon type="diff" />,
    name: "Set Kurikulum"
  }
];
export default function Content() {
  return (
    <div>
      <PageHeader
        onBack={() => null}
        backIcon={false}
        title="Master Data Pusat"
        subTitle=""
        bordered={false}
        extra={[
          <Tag style={{ color: "black" }} key="2" color="white">
            <Icon type="search" />
          </Tag>
        ]}
      />
      <Row gutter={48}>
        <Col span={24}>
          <GridMenu menu={menu} />
        </Col>
      </Row>
    </div>
  );
}
