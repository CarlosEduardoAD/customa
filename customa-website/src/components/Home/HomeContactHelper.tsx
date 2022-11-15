import { Link } from "react-router-dom";

export function HomeContactHelper() {
  return (
    <div className="flex flex-col items-center justify-center sm:grid grid-cols-2 grid-flow-col">
      <div className="flex flex-col sm:items-start sm:justify-start items-center justify-center p-12 gap-12">
        <p className="font-raleway text-xl text-center sm:text-start">
          O que você está esperando ? Se cadastre e venha aproveitar a nossa
          plataforma !
        </p>
        <div className="font-raleway font-semibold">
          <Link className='p-4 bg-indigo-500 text-white rounded-lg' to='/cadastro'>Se cadastre</Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 mb-12">
        <p className="font-raleway font-semibold text-lg bg-violet-600 p-2 rounded-lg text-white">Também temos uma newsletter !</p>
        <form className="flex flex-col gap-4 pt-4">
            <label className="font-raleway font-normal text-md mt-2">Assine ela: </label>
            <input className="border-2 border-violet-600 text-black p-2 rounded-lg" type="email" placeholder="seuemail@gmail.com"/>
            <button className=" bg-violet-600 text-white font-raleway font-bold p-1 rounded-lg">Inscrever-se</button>
        </form>
      </div>
    </div>
  );
}
