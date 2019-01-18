import MainLayout from "./components/Layout";

function Contact() {
  return (
    <div style={{ marginTop: 100 }}>
      <h1>Contact Kami</h1>
      <p>Web Developer & Designer</p>
      <h1>Tentang Kami</h1>
      <p>Web Developer & Designer</p>
      <h1>Tentang Kami</h1>
      <p>Web Developer & Designer</p>
      <h1>Tentang Kami</h1>
      <p>Web Developer & Designer</p>
      <h1>Tentang Kami</h1>
      <p>Web Developer & Designer</p>
    </div>
  );
}

export default () => {
  return <MainLayout content={<Contact />} />;
};
