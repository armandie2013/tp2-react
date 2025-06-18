import React from 'react';
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi"; // Iconos para abrir/cerrar

const NavBar = () => {

    // Uso de hook useState
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navbarLinks = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Portada", link: "/" },
    { id: 3, title: "Contacto", link: "/" },
    { id: 4, title: "Soporte", link: "/" },
  ];

  return (
    <div className="w-full bg-black text-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* logo y titulo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
            alt="logo"
            className="w-[50px] h-[50px]"
          />
          <p className="text-2xl font-bold">Superhéroes</p>
        </div>

        {/* icono hambugesa */}
        <div className="md:hidden pr-6">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>

        {/* enlaces del menu visa normal */}
        <ul className="hidden md:flex space-x-6 list-none text-sm md:text-base">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* menu desplegable */}
      {menuAbierto && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden text-base">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="block hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;