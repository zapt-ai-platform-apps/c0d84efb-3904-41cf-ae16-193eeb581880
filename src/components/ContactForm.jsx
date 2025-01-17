import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("[DEBUG] Submitting contact form...");
    setSubmitting(true);

    try {
      // Ici vous pourriez envoyer vos données vers votre API
      // fetch('/api/contact', { ... })
      alert("Votre message a bien été envoyé !");
    } catch (error) {
      console.error("[ERROR] Contact page submission failed:", error);
      Sentry.captureException(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label htmlFor="nom" className="block mb-1">Nom</label>
        <input
          id="nom"
          name="nom"
          type="text"
          className="w-full box-border border border-gray-300 rounded p-2"
          onChange={handleChange}
          value={formData.nom}
          required
          disabled={submitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full box-border border border-gray-300 rounded p-2"
          onChange={handleChange}
          value={formData.email}
          required
          disabled={submitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full box-border border border-gray-300 rounded p-2"
          rows="5"
          onChange={handleChange}
          value={formData.message}
          required
          disabled={submitting}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={submitting}
      >
        Envoyer
      </button>
    </form>
  );
}