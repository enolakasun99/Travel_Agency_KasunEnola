import React from "react";
import Banner from "../components/Banner";
import image3 from "../assets/image3.jpg";
import avatar from "../assets/avatar.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Banner title="O nama" image={image3} />

      <div className="page-content">
        <section className="about-agency">
          <h2>O nama</h2>
          <p>
            Travel Agency od 2005. organizira izlete diljem svijeta. Naša misija
            je pružiti sigurna i nezaboravna putovanja prilagođena svakom
            putniku. Od planinarenja do egzotičnih destinacija, s nama ste u
            rukama iskusnih vodiča i provjerenih partnera.
          </p>
        </section>

        <section className="our-values" style={{ marginTop: "40px" }}>
          <h2>Naše vrijednosti</h2>
          <div className="grid">
            <div className="value-item">
              <h3>⭐ Sigurnost i pouzdanost</h3>
              <ul>
                <li>Svi naši izleti uključuju osiguranje.</li>
                <li>Iskusni, licencirani vodiči na svim turama.</li>
              </ul>
            </div>
            <div className="value-item">
              <h3>💲 Pristupačne cijene</h3>
              <ul>
                <li>
                  Transparentnost troškova i najbolji omjer kvalitete i cijene.
                </li>
                <li>Fleksibilne opcije plaćanja.</li>
              </ul>
            </div>
            <div className="value-item">
              <h3>🌿 Manje grupe i autentična iskustva</h3>
              <ul>
                <li>Fokus na male grupe za personalizirani doživljaj.</li>
                <li>Otkrivanje skrivenih lokalnih dragulja.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="our-team" style={{ marginTop: "40px" }}>
          <h2>Naš tim</h2>
          <div className="grid team-grid">
            <div className="team-member">
              <img
                src={avatar}
                alt="Marin Šukić avatar"
                className="member-avatar"
              />
              <h4>Marin Šukić</h4>
              <p className="muted">Osnivač & CEO</p>
            </div>
            <div className="team-member">
              <img
                src={avatar}
                alt="Petar Zvonić avatar"
                className="member-avatar"
              />
              <h4>Petar Zvonić</h4>
              <p className="muted">Voditelj prodaje</p>
            </div>
            <div className="team-member">
              <img
                src={avatar}
                alt="Tomislav Kovač avatar"
                className="member-avatar"
              />
              <h4>Tomislav Kovač</h4>
              <p className="muted">Glavni vodič</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
