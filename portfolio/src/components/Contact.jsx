import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${form.name}\nEmail: ${form.email}\nMensagem: ${form.message}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact container" id="contact">
      <h2 className="section-title">Contactos</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Mensagem" value={form.message} onChange={handleChange} required/>
        <button type="submit" className="btn">Enviar</button>
      </form>
      <div className="contact-icons">
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">LinkedIn</a>
        <a href="mailto:email@dominio.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
