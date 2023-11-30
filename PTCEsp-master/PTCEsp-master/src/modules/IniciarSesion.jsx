import Header from "./Header";
import React from "react";

function IniciarSesion() {
  return (
    <div>
      <Header
        item1="Home"
        ref1="/"
        item2="Volver"
        ref2="/"
        item3="Registro"
        ref3="/registro"
      />
     <div className="flex flex-row w-full">
     <div className="w-3/5">
        <img
          src="./src/assets/Images/tripsv.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-2/5 pr-8 m-auto">
        <h1 className="uppercase text-2xl tracking-widest m-auto text-center">Inicia Sesión</h1>
        <form action="" method="" className="py-10 m-auto">
            <input type="text" name="username" id="username"  placeholder="Usuario" className="border-2 border-[#55595c] rounded-md w-full py-2 px-3 mt-4 m-auto"/>
            <input type="password" name="password" id="password"  placeholder="Contraseña" className="border-2 border-[#55595c] rounded-md m-auto w-full py-2 px-3 mt-10"/>
            <div className="w-full flex flex-col">
            <input type="submit" value="Ingresar" className="mt-10 w-4/5 bg-[#d9534f] py-4 m-auto text-white uppercase"/>
            </div>
        </form>
      </div>
     </div>
    </div>
  );
}

export default IniciarSesion;
