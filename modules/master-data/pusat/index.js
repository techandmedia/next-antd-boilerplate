import { useContext } from 'react';
import { Row, Col, Card, PageHeader, Icon, Tag } from 'antd';
import { MenuContext } from 'context/Global-Context';
import { GridMenu } from 'components';

const menu = [
  {
    key: 'badan-hukum',
    icon: <Icon type="audit" />,
    name: 'Badan Hukum',
    style: { borderRadius: '14px 0 0' },
  },
  {
    key: 'perguruan-tinggi',
    icon: <Icon type="bank" />,
    name: 'Perguruan Tinggi',
  },
  {
    key: 'program-studi',
    icon: <Icon type="experiment" />,
    name: 'Program Studi',
    style: { borderRadius: '0 14px 0 0' },
  },
  {
    key: 'pimpinan',
    icon: <Icon type="cluster" />,
    name: 'Pimpinan',
    style: { borderRadius: '0 0 0 14px' },
  },
  {
    key: 'teknisi',
    icon: <Icon type="tool" />,
    name: 'Teknisi / Lab',
  },
  {
    key: 'inventaris',
    icon: <Icon type="car" />,
    name: 'Inventaris',
    style: { borderRadius: '0 0 14px' },
  },
];
export default function Content() {
  const { dispatchMenu } = useContext(MenuContext);

  function handleMenuClick(e) {
    console.log(e);
    dispatchMenu({ key: e });
  }
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
          <GridMenu
            menu={menu}
            handleMenuClick={handleMenuClick}
            style={{
              borderRadius: 14,
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
