import { Row, Col, Card, PageHeader, Icon, Tag } from 'antd';
import { GridMenu } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

const menu = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardTeacher}
        style={{ width: '1rem', marignRight: '1rem' }}
      />
    ),
    style: { width: '20%' },
    name: 'Data Dosen',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{ width: '1rem', marignRight: '1rem' }}
      />
    ),
    style: { width: '20%' },
    name: 'Data Mahasiswa',
  },
  {
    icon: <Icon type="idcard" />,
    style: { width: '35%' },
    name: 'Rekap Mahasiswa per Tahun',
  },
  {
    icon: <Icon type="reload" />,
    style: { width: '25%' },
    name: 'Reset Password',
  },
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
          <Tag style={{ color: 'black' }} key="2" color="white">
            <Icon type="search" />
          </Tag>,
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
