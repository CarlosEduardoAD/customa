import styles from "./home.module.css";
import woman from "../../assets/woman-home.jpg";

export function HomeImageHelper() {
  return (
    <main className="overflow-hidden bg-indigo-700 sm:bg-gradient-to-r sm:from-slate-300 from-indigo-300 sm:to-indigo-500 max-w-screen min-h-full">
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-flow-col">
        <div className="flex items-center justify-center flex-col p-8 mt-24">
          <div className="grid grid-row-2 gap-12">
            <div>
              <p className="sm:text-black text-white text-5xl font-extrabold font-raleway">
                Gerenciar clientes não precisa ser{" "}
                <span className="text-red-500">chato</span>
              </p>
              <p className="sm:text-black text-white font-semibold mt-4 lg:text-lg text-md">
                Às vezes você apenas não está usando a ferramenta correta
              </p>
            </div>
            <div className="font-raleway font-semibold">
              <div className="text-white sm:text-black lg:text-lg text-sm">
                Nossa plataforma de gerenciamento de clientes facilita todo esse
                processo para você, consultar, adicionar e alterar sua clientela
                é muito importante para um negócio, e nossa solução pode te
                ajudar da maneira mais simples e eficiente.
              </div>
              <button className="rounded-lg bg-white hover:bg-indigo-500 hover:text-white transition-all duration-200 mt-4 p-4">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:pt-24 pt-8">
          <div className="pb-12">
            <img
              className="z-10 w-[0px] sm:w-[324px] pr-4 lg:pr-0 rounded-lg shadow-lg "
              src={woman}
              alt=""
            />
            {/* <img
              className="absolute z-1 max-w-[324px] w-[0px] top-36 ml-4 sm:w-[324px] pr-4 lg:pr-0 rounded-lg opacity-20"
              src={woman}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
