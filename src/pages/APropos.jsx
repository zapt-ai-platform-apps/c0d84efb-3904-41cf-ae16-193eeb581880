import React from 'react';

export default function APropos() {
  console.log("[DEBUG] A Propos page rendering...");
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">À propos</h1>
      <p className="mb-4">
        Nyumamro Souheili est une commune au patrimoine riche, avec une histoire ancestrale et
        un cadre de vie exceptionnel. Découvrez son histoire, son savoir-faire, et son équipe municipale.
      </p>
      <h2 className="text-xl font-semibold mb-2">Histoire</h2>
      <p className="mb-4">
        Fondée il y a plusieurs siècles, Nyumamro Souheili s'est développée autour de traditions
        culturelles uniques.
      </p>
      <h2 className="text-xl font-semibold mb-2">Conseil Municipal</h2>
      <p className="mb-4">
        Le maire et ses adjoints œuvrent au quotidien pour le bien-être des habitants...
      </p>
    </div>
  );
}