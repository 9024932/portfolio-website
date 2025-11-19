import { useState } from "react";

const Contact = () => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form data:", { naam, email, bericht });

    
    setNaam("");
    setEmail("");
    setBericht("");
  };

  return (
    <div>
      <div className="contact2">
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <img className="logo" src="./img/mail.png" alt="mail" />
              <h1>emaneul2008@gmail.com</h1>
            </div>
            <div className="info-item">
              <img className="logo" src="./img/tel.png" alt="phone" />
              <h1>0630088163</h1>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="naam">Naam</label>
              <input
                type="text"
                id="naam"
                value={naam}
                onChange={(e) => setNaam(e.target.value)}
                placeholder="Vul je naam in"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Vul je email in"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bericht">Bericht</label>
              <textarea
                id="bericht"
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                placeholder="Typ je bericht"
                required
              ></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;