import React from "react";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import image5 from "../assets/image5.jpg";

export default function Contact() {
  return (
    <div className="contact-page">
      <Banner title="Kontakt" image={image5} />

      <div className="page-content">
        <ContactForm />

        <div className="contact-info">
          <h2>Podaci</h2>
          <p>Email: info@travel-agency.example</p>
          <p>Telefon: +385 91 000 0000</p>
          <p>Adresa: Ulica Primjera 1, Zagreb</p>
          <p>Radno vrijeme: Pon-Pet 9-17h</p>
        </div>
      </div>
    </div>
  );
}
