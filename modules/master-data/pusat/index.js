import { Row, Col, Card, PageHeader, Icon, Tag } from "antd";
import { GridMenu } from "components";
const menu = [
  {
    icon: <Icon type="audit" />,
    name: "Badan Hukum"
  },
  {
    icon: <Icon type="bank" />,
    name: "Perguruan Tinggi"
  },
  {
    icon: <Icon type="experiment" />,
    name: "Program Studi"
  },
  {
    icon: <Icon type="cluster" />,
    name: "Pimpinan"
  },
  {
    icon: <Icon type="tool" />,
    name: "Teknisi / Lab"
  },
  {
    icon: <Icon type="car" />,
    name: "Inventaris"
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
