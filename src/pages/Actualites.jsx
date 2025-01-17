import React from 'react';

export default function Actualites() {
  console.log("[DEBUG] Actualites page rendering...");
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Actualités</h1>
      <p className="mb-4">Suivez ici les dernières informations, l’agenda et les événements de Nyumamro Souheili.</p>
      <p className="mb-4">
        • Projets en cours : constructions, réhabilitations, etc. <br />
        • Agenda culturel : concerts, expositions, fêtes traditionnelles.
      </p>
      <div className="mb-4">
        <img
          src=""
          alt="Événement municipal"
          data-image-request="Photo d’un événement municipal à Nyumamro Souheili"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}