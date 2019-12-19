import { Row, Col, Menu, Card, PageHeader, Tag, Dropdown, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item>2018 / 2019</Menu.Item>
    <Menu.Item>2019 / 2020</Menu.Item>
    <Menu.Item>2020 / 2021</Menu.Item>
  </Menu>
);

export default function Content() {
  return (
    <div>
      <PageHeader
        onBack={() => null}
        backIcon={false}
        title="Dashboard"
        subTitle=""
        extra={[
          <Dropdown key="1" overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Tag>
                Tahun Akademik &nbsp; 2019 / 2020 <Icon type="down" />
              </Tag>
            </a>
          </Dropdown>,
          <Tag key="2">
            <Icon type="search" />
          </Tag>
        ]}
      />
      <Row gutter={48}>
        <Col xs={24} md={16} lg={16}>
          <Card
            style={{
              width: "100%",
              background: "#ffdc9c",
              borderRadius: "1rem"
            }}
            bordered={false}
          >
            <h2>Hi, Nama Lengkap!</h2>
            <Col span={20}>
              <p>
                Banyak mahasiswa yang tidak hadir kelas bulan ini! E - DOM baru
                terisikan 70% dari siswa Contoh pemberitahuan lainnya ...
              </p>
            </Col>
            <Col span={4}>
              <Icon
                style={{
                  fontSize: "8rem",
                  position: "absolute",
                  top: "-7rem",
                  right: "-1rem"
                }}
                type="smile"
                theme="twoTone"
              />
            </Col>
          </Card>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            title="Birthday today"
            extra={<Icon type="ellipsis" />}
            style={{
              width: "100%",
              borderRadius: "1rem"
            }}
          >
            <Meta
              description={
                <div>
                  <FontAwesomeIcon icon="user-graduate" />
                </div>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
