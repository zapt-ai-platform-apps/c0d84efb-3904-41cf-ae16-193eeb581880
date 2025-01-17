import React from 'react';

export default function Services() {
  console.log("[DEBUG] Services page rendering...");
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Services Municipaux</h1>
      <ul className="list-disc list-inside mb-4">
        <li>Service Urbanisme</li>
        <li>Service État Civil</li>
        <li>Service Environnement</li>
        <li>Service Culture et Loisirs</li>
      </ul>
      <p className="mb-4">
        Retrouvez ici les horaires, les procédures administratives et toute la documentation
        nécessaire. Certains documents sont téléchargeables directement ci-dessous :
      </p>
      <a href="#" className="cursor-pointer text-blue-600 underline">
        Formulaire d'état civil (PDF)
      </a>
    </div>
  );
}