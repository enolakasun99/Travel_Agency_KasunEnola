import React, { useState } from 'react';
import './ContactForm.css';

const initialFormData = {
  fullName: '',
  email: '',
  phone: '', 
  subject: '', 
  message: '',
  privacy: false, 
};

const subjects = [
  { value: '', label: 'Odaberite temu...' },
  { value: 'rezervacija', label: 'Upit za rezervaciju' },
  { value: 'suradnja', label: 'Poslovna suradnja' },
  { value: 'ostalo', label: 'Ostalo' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (formData.fullName.length < 3) {
      newErrors.fullName = 'Ime i prezime moraju imati minimalno 3 znaka.'; 
      isValid = false;
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Unesite ispravnu e-mail adresu (mora sadržavati @ i .).'; 
      isValid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Tema je obavezna.'; 
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Poruka mora imati minimalno 10 znakova.'; 
      isValid = false;
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Prihvaćanje uvjeta obrade podataka je obavezno.'; 
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Poruka uspješno poslana!"); 
      setFormData(initialFormData); 
      setErrors({}); 
    }
  };

  const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return <p className="error-message">{message}</p>; 
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Kontaktirajte nas</h3>
      <p className="muted">Ispunite formu i javit ćemo se uskoro.</p>

      <div className="form-group">
        <label htmlFor="fullName">Ime i prezime *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="npr. Ana Anić"
          aria-invalid={!!errors.fullName}
        />
        <ErrorMessage message={errors.fullName} /> 
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ana@example.com"
          aria-invalid={!!errors.email}
        />
        <ErrorMessage message={errors.email} /> 
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefon (opcionalno)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+385 91 123 4567"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Tema *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
        >
          {subjects.map(sub => (
            <option key={sub.value} value={sub.value} disabled={!sub.value}>
              {sub.label}
            </option>
          ))}
        </select>
        <ErrorMessage message={errors.subject} /> 
      </div>

      <div className="form-group">
        <label htmlFor="message">Poruka *</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Željeli bismo pitati..."
          aria-invalid={!!errors.message}
        ></textarea>
        <ErrorMessage message={errors.message} /> 
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          aria-invalid={!!errors.privacy}
        />
        <label htmlFor="privacy">Prihvaćam uvjete obrade podataka *</label>
        <ErrorMessage message={errors.privacy} />
      </div>

      <button type="submit" className="btn submit-btn">
        Pošalji
      </button>
    </form>
  );
}