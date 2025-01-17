import React from 'react';

export default function Accueil() {
  console.log("[DEBUG] Accueil page rendering...");
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Accueil</h1>
      <p className="mb-4">
        Bienvenue sur le site officiel de Nyumamro Souheili. Retrouvez ici les dernières informations, les actualités municipales, et une présentation générale de cette charmante commune.
      </p>
      <div className="mb-4">
        <img
          src=""
          alt="Vue de la commune"
          data-image-request="Vue aérienne de la commune de Nyumamro Souheili"
          className="w-full h-auto"
        />
      </div>
      <p>
        Utilisez la barre de navigation pour découvrir toutes les rubriques.
      </p>
    </div>
  );
}