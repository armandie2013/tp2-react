import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  const [mensajeMostrado, setMensajeMostrado] = useState(false);
  const manejarClick = () => {
    setMensajeMostrado(!mensajeMostrado);
  };

  return (
    <div
      className="w-full min-h-[calc(100vh-130px)] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/fondo-superheroes-4.jpg')" }}
    >
      <motion.button
        onClick={manejarClick}
        initial={{scale:1000}}
        animate={{opacity: 1, scale:1}}
        whileHover={{scale:2}}
        whileTap={{scale:0.95}}
        transition={{duration:0.4}}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg mb-4"
      >
        Presioname
      </motion.button>

      {mensajeMostrado && (
        <p className="bg-black/60 p-4 rounded-lg text-lg md:text-xl">
          Gracias por presionarme, React recién empieza!
        </p>
      )}
    </div>
  );
};

export default Main;