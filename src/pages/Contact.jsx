import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-4">
        Pour toute demande, vous pouvez nous contacter via le formulaire ci-dessous,
        ou directement par téléphone.
      </p>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}