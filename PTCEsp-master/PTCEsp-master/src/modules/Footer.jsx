import React from "react";

function Footer() {
  return (
    <div className="bg-[#1a1a1a] flex flex-col p-10">
      <div className="flex flex-row">
        <div className="flex flex-col w-3/5 px-10 ">
          <p className="pb-4 text-lg text-white w-3/4 text-justify m-auto">
            Nosotros somos una empresa sin fines de lucro que busca ayudar a los
            turistas que quieren visitar algunos lugares de El Salvador,
            brindándoles información sobre los lugares más interesantes y
            bonitos de este pequeño país.
          </p>
          <p className="pb-4 text-lg text-white w-3/4 m-auto">
            &#169; 2023 SV Trip. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col w-2/5 gap-4">
          <h1 className="text-2xl text-white">Contáctanos</h1>
          <div>
            <p className="text-lg text-white">Dirección:</p>
            <span className="text-lg text-white">
              Universidad Simeon Cañas
            </span>
          </div>
          <div>
            <p className="text-lg text-white">Email:</p>
            <span className="text-lg text-white">trip.sv2023@gmail.com</span>
          </div>
          <div>
            <p className="text-lg text-white">Teléfono:</p>
            <span className="text-lg text-white">74940667</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mt-8">
        <div className="w-full">
          <h1 className="text-xl uppercase text-white hover:underline text-center py-4 border border-[#55595c]">Facebook</h1>
        </div>
        <div className="w-full">
          <h1 className="text-xl uppercase text-white hover:underline text-center py-4 border border-[#55595c]">Instagram</h1>
        </div>
        <div className="w-full">
          <h1 className="text-xl uppercase text-white hover:underline text-center py-4 border border-[#55595c]">Twitter</h1>
        </div>
        <div className="w-full">
          <h1 className="text-xl uppercase text-white hover:underline text-center py-4 border border-[#55595c]">Google</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
