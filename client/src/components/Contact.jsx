const Contact = () => {
  return (
    <div className="flex-column" style={{ margin: "10px" }}>
      <img
        src="https://transport.cambridgeshirepeterborough-ca.gov.uk/wp-content/uploads/2022/09/TW_Contact_Us.png"
        alt="contact us"
        style={{ width: "50%", height: "auto" }}
      />

      <div style={{ width: "50%" }} className="flex-column">
        <h1>Contact Us!</h1>
        <p>Email: contact@ars.com</p>
        <p>Phone: 9999999999</p>
      </div>
    </div>
  );
};

export default Contact;
