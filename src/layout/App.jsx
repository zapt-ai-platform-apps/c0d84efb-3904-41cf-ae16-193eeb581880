import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  console.log("[DEBUG] Layout rendering...");
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <header className="p-4 bg-gray-200">
        <nav className="flex gap-4">
          <Link to="/" className="cursor-pointer">Accueil</Link>
          <Link to="/a-propos" className="cursor-pointer">À propos</Link>
          <Link to="/services" className="cursor-pointer">Services</Link>
          <Link to="/actualites" className="cursor-pointer">Actualités</Link>
          <Link to="/tourisme" className="cursor-pointer">Tourisme</Link>
          <Link to="/contact" className="cursor-pointer">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow h-full p-4">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-200 text-center">
        © 2023 Commune de Nyumamro Souheili - <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">Made on ZAPT</a>
      </footer>
    </div>
  );
}