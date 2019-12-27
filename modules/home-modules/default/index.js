import {
  Row,
  Col,
  Menu,
  Card,
  PageHeader,
  Tag,
  Dropdown,
  Icon,
  List
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import {
  BarChart,
  XAxis,
  Tooltip as ChartTooltip,
  Legend,
  Bar
} from "recharts";
const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item>2018 / 2019</Menu.Item>
    <Menu.Item>2019 / 2020</Menu.Item>
    <Menu.Item>2020 / 2021</Menu.Item>
  </Menu>
);

const dataSource = [
  {
    key: "table-1",
    icon: (
      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Mahasiswa/i",
    count: "0"
  },
  {
    key: "table-2",
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Dosen",
    count: "0"
  },
  {
    key: "table-3",
    icon: (
      <FontAwesomeIcon
        icon={faIdBadge}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Lainnya",
    count: "0"
  }
];

const dataOverview = [
  {
    key: "tableOv-1",
    icon: (
      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Murid",
    count: "0"
  },
  {
    key: "tableOv-2",
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Dosen",
    count: "0"
  },
  {
    key: "tableOv-3",
    icon: (
      <FontAwesomeIcon
        icon={faIdBadge}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Mata Kuliah",
    count: "0"
  },
  {
    key: "tableOv-4",
    icon: (
      <FontAwesomeIcon
        icon={faIdBadge}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "Alumni",
    count: "0"
  },
  {
    key: "tableOv-5",
    icon: (
      <FontAwesomeIcon
        icon={faIdBadge}
        style={{ width: "1rem", marignRight: "1rem" }}
      />
    ),
    name: "DO",
    count: "0"
  }
];
const menuAttendance = (
  <Menu>
    <Menu.Item>Minggu ini</Menu.Item>
    <Menu.Item>Bulan ini</Menu.Item>
    <Menu.Item>Tahun ini</Menu.Item>
  </Menu>
);
const attendance = [
  {
    name: "23/12",
    mahasiswa: 2,
    staff: 4
  },
  {
    name: "24/12",
    mahasiswa: 0,
    staff: 3
  },
  {
    name: "25/12",
    mahasiswa: 1,
    staff: 1
  },
  {
    name: "26/12",
    mahasiswa: 2,
    staff: 0
  },
  {
    name: "27/12",
    mahasiswa: 90,
    staff: 12
  }
];

export default function Content() {
  return (
    <div>
      <PageHeader
        onBack={() => null}
        backIcon={false}
        title="Dashboard"
        subTitle=""
        bordered={false}
        extra={[
          <Dropdown key="1" overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Tag style={{ color: "black" }} color="white">
                Tahun Akademik &nbsp; 2019 / 2020 <Icon type="down" />
              </Tag>
            </a>
          </Dropdown>,
          <Tag style={{ color: "black" }} key="2" color="white">
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
            bordered={false}
            title="Birthday today"
            extra={<Icon type="ellipsis" />}
            style={{
              width: "100%",
              borderRadius: "1rem"
            }}
            headStyle={{ borderBottom: 0 }}
          >
            <Meta
              description={
                <List
                  split={false}
                  itemLayout="horizontal"
                  dataSource={dataSource}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        key={item.key}
                        avatar={item.icon}
                        description={item.name}
                      />
                      <div>{item.count}</div>
                    </List.Item>
                  )}
                />
              }
            />
          </Card>
        </Col>
        <Col xs={24} md={16} lg={16}>
          <Card
            bordered={false}
            title="Kehadiran di kelas"
            extra={
              <Dropdown key="1" overlay={menuAttendance}>
                <a className="ant-dropdown-link" href="#">
                  <Tag style={{ color: "black" }} color="white">
                    Minggu ini <Icon type="down" />
                  </Tag>
                </a>
              </Dropdown>
            }
            style={{
              width: "100%",
              borderRadius: "1rem"
            }}
            headStyle={{ borderBottom: 0 }}
          >
            <BarChart width={730} height={250} data={attendance} barGap={0}>
              <XAxis dataKey="name" />
              <ChartTooltip />
              <Legend />
              <Bar dataKey="mahasiswa" fill="#8884d8" />
              <Bar dataKey="staff" fill="#82ca9d" />
            </BarChart>
          </Card>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            bordered={false}
            title="Overview"
            extra={<Icon type="ellipsis" />}
            style={{
              width: "100%",
              borderRadius: "1rem",
              marginTop: "2rem"
            }}
            headStyle={{ borderBottom: 0 }}
          >
            <Meta
              description={
                <List
                  split={false}
                  itemLayout="horizontal"
                  dataSource={dataOverview}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        key={item.key}
                        avatar={item.icon}
                        description={item.name}
                      />
                      <div>{item.count}</div>
                    </List.Item>
                  )}
                />
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
