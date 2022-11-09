import crowd from "../../assets/crowd-people.png";

export function HomePresentationHelper() {
  return (
    <div className="overflow-hidden bg-violet-600 max-w-screen min-h-full">
      <div className="flex items-center justify-center sm:hidden">
        <p className="text-3xl mt-4 text-white font-bold font-raleway">
          O que oferecemos ?
        </p>
      </div>
      <div className="flex flex-col sm:grid grid-cols-2 grid-flow-col">
        <div className="hidden sm:grid sm:grid-rows-2 sm:grid-flow-row">
          <div className="flex items-center justify-center text-white text-4xl font-raleway font-bold p-4">
            Quais as nossas vantagens ?
          </div>
          <div className="flex items-center justify-center p-4">
            <ul className="-mt-36 flex flex-col gap-4 text-white font-raleway font-semibold text-xl">
              <li>&#x2022; Oferecemos uma suíte completa de ferramentas</li>
              <li>&#x2022; Mecanismos de pesquisa para clientes específicos</li>
              <li>&#x2022; Envio de e-mails para clientes específicos</li>
              <li>&#x2022; Suporte 24/7 com nossa equipe especializada</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-24">
          <div className="flex items-center justify-center bg-white rotate-3 shadow-xl rounded-md w-[248px] h-[340px] border-t-2 border-black border-b-2">
            <div className="flex flex-col items-center justify-center p-12">
              <img src={crowd} alt="" />
              <ul className="text-xs font-raleway font-semibold">
                <li>&#x2022; Oferecemos uma suíte completa de ferramentas</li>
                <li>
                  &#x2022; Mecanismos de pesquisa para clientes específicos
                </li>
                <li>&#x2022; Atualize suas informações</li>
                <li>&#x2022; Remova se for necessário</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
