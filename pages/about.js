import MainLayout from "./components/Layout";

function About() {
  return (
    <div style={{ marginTop: 100 }}>
      <h1>Tentang Kami</h1>
      <p>Media Dakwah Dai Indonesia</p>
      <h1>Tentang Kami</h1>
      <p>Media Dakwah Dai Indonesia</p>
      <h1>Tentang Kami</h1>
      <p>Media Dakwah Dai Indonesia</p>
      <h1>Tentang Kami</h1>
      <p>Media Dakwah Dai Indonesia</p>
      <h1>Tentang Kami</h1>
      <p>Media Dakwah Dai Indonesia</p>
    </div>
  );
}

export default () => {
  return <MainLayout content={<About />} />;
};
