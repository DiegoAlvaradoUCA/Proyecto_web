import React from "react";
import Header from "./Header";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import GoogleMaps from "./GoogleMaps";
import Footer from "./Footer";
import { Link } from 'react-router-dom'

function Index() {

  return (
    <div className="w-full h-screen relative">
      <div>
        <Header
          item1="Categorías" ref1="/categorias"
          item2="Iniciar Sesión" ref2="/iniciar-sesion"
          item3="Registrarse" ref3="/registro"
          item4="Paquetes" ref4="/paquetes"
          item5="Crud" ref5="/crud"
        />
        <div className="h-[36rem] w-screen">
        <CarouselCustomArrows />
        </div>
      </div>
      <div className="flex flex-row gap-6 m-auto py-10 overflow-hidden">
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md">
          <div className="bg-[url('./src/assets/Fotos/eltiunco.jpg')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">PLAYAS</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
            <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md">
          <div className="bg-[url('./src/assets/Fotos/coate.jpg')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">LAGOS Y LAGUNAS</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
            <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[25rem] border border-gray-300 rounded-md" >
          <div className="bg-[url('./src/assets/Fotos/sanantonio.jpg')] h-1/2 bg-cover "></div>
          <div className="h-1/2 px-4">
            <h1 className="uppercase text-xl text-center py-2 font-medium text-[#55595c]">Montañas</h1>
            <p className="pb-2 text-[#55595c]">El Salvador es uno de los destinos de Centroamérica que cuenta con hermosas playas que se adaptan a todo tipo de turistas.</p>
            <div>
              <Link to="/mas"><input type="submit" value="Ver más" className="py-3 px-7 bg-[#070707] border-[#010000] hover:bg-black text-white hover:cursor-pointer"/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6">
        <GoogleMaps/>
      </div>
      <div className="w-full flex flex-col gap-6 py-20">
        <h1 className="w-full text-center text-xl">" Gracias por tan buena página web, los paquetes tienen buen precio y teimpo de respuesta en correo es inmediata. "</h1>
        <p className="text-center text-[#55595c] text-lg w-full">-- Carlos Miranda</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Index;
