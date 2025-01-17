import React from 'react';

export default function Tourisme() {
  console.log("[DEBUG] Tourisme page rendering...");
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Tourisme</h1>
      <p className="mb-4">
        Nyumamro Souheili regorge de richesses naturelles et culturelles. Venez découvrir ses
        paysages, son patrimoine unique, et ses traditions.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Randonnées dans la montagne</li>
        <li>Expédition en bord de mer</li>
        <li>Visites guidées du village historique</li>
      </ul>
    </div>
  );
}