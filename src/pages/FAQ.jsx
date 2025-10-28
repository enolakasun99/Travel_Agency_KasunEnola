import React, { useState } from "react";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import image2 from "../assets/image2.jpg";

const faqData = [
  {
    id: 1,
    question: "Kako rezervirati izlet?",
    answer:
      "Izlet možete rezervirati preko kontakt forme ili pozivom. Naši agenti će vam poslati ponudu i detalje za uplatu.",
  },
  {
    id: 2,
    question: "Koje su opcije plaćanja?",
    answer:
      "Prihvaćamo plaćanje putem bankovne doznake (virman) ili kreditnom karticom (Visa, Mastercard).",
  },
  {
    id: 3,
    question: "Jesu li izleti sigurni?",
    answer:
      "Apsolutno. Svi naši izleti vode iskusni, certificirani vodiči, a sigurnost je naš glavni prioritet. Osiguranje je uključeno u cijenu.",
  },
  {
    id: 4,
    question: "Mogu li dobiti povrat novca?",
    answer:
      "Politika povrata novca ovisi o specifičnom izletu i roku otkazivanja. Molimo provjerite uvjete putovanja ili nas kontaktirajte.",
  },
  {
    id: 5,
    question: "Što ako se izlet otkaže?",
    answer:
      "U slučaju otkazivanja izleta zbog vremenskih uvjeta ili drugih nepredviđenih okolnosti, ponudit ćemo vam zamjenski termin ili puni povrat novca.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(faqData[0].id);

  return (
    <div className="faq-page">
      <Banner title="F.A.Q." image={image2} />

      <div className="page-content">
        <h2>Često postavljena pitanja</h2>
        <div className="accordion-container">
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              activeId={activeId}
              onToggle={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
