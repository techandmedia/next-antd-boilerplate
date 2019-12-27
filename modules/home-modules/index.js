import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function HomeMenu() {

  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="Visi Misi" key="1">
        Visi dan Misi Akper Bina Insan Jakarta
    </TabPane>
      <TabPane tab="Tata Cara Pendaftaran" key="2">
        Tata Cara Pendaftaran
    </TabPane>
    </Tabs> ,
);
}