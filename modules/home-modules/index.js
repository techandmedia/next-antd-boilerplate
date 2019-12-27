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
        <ul>
          <li>
            1. Melakukan pendaftaran online dan membayar biaya pendaftaran untuk ujian tertulis sebesar Rp 150.000. Upload bukti bayar bersamaan dengan pendaftaran Anda.
          </li>

          <li>
            2. Anda akan mendapatkan token sementara setelah melakukan upload bukti bayar, harap cek di menu ujian dalam 1*24 jam untuk mendapatkan nomor ujian Anda.
          </li>

          <li>
            3. Cek di Menu Ujian dengan nomor token Anda untuk mengetahui nomor ujian Anda
          </li>

          <li>
            4. Anda yang telah lulus ujian tertulis, dapat melanjutkan ujian kesehatan dengan membayar biaya pendaftaran sebesar Rp 300.000 dan melakukan upload bukti bayar.
          </li>

          <li>
            5. Selalu cek menu ujian untuk mendapatkan status nomor ujian atau kelulusan ujian Anda.
          </li>
        </ul>
      </TabPane>
    </Tabs>
  )
}