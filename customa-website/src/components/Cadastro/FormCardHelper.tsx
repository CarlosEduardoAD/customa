import { useState } from "react";
import {
  ArrowSquareOut,
  IdentificationCard,
  At,
  AddressBook,
  Password,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import {useNavigate, useNavigation} from 'react-router-dom'

interface FormData {
  nomeUsuario: string;
  email: string;
  cnpj: string;
  senha: string;
}

export function FormCardHelper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate()

  const [text, setText] = useState(false);
  const createUser = (data: any) => {
    sessionStorage.setItem('senha', data.senha)
    console.log('Cadastrado com sucesso !');
    navigate('/login')
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(createUser)}>
        <div className="sm:p-20 p-16 sm:mx-0 bg-white rounded-lg shadow-lg shadow-violet-400 my-12">
          <p className="flex sm:-mt-16 -mt-8 font-raleway font-bold lg:text-3xl sm:text-xl text-lg text-start mb-1">
            <ArrowSquareOut className='mt-3' size={32} color={"#7F23F7"} />
            <span className="ml-2 mt-3">Cadastre-se</span>
          </p>
          <span>
            <svg
              version="1.1"
              id="line_2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="140px"
              height="5px"
            >
              <path
                className="path2"
                fill="#7F23F7"
                stroke-width="2"
                stroke="#7F23F7"
                d="M0 0 l1120 0"
              />
            </svg>
          </span>

          <div className="flex flex-col mt-4 font-raleway ">
            <label className="mt-4 font-semibold">Nome</label>
            <input
              defaultValue={""}
              {...register("nomeUsuario", { required: true })}
              className={`bg-nome bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm bg-[#E8E8E8] indent-8 p-1`}
              type="text"
            />
            {errors.nomeUsuario && <span><small>Por favor, coloque seu nome</small></span>}
            <label className="mt-4 font-semibold">E-mail</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
              })}
              className="bg-email bg-no-repeat bg-[center_left_0.2rem] mt-1 border-[1.4px] rounded-sm bg-[#E8E8E8] indent-8 p-1"
              type="email"
            />
            {errors.email && <span><small>Por favor, coloque um e-mail válido</small></span>}
            <label className="mt-4 font-semibold">CNPJ</label>
            <input
              {...register("cnpj", {
                required: true,
                pattern: /\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
              })}
              className="bg-cnpj bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm bg-[#E8E8E8] indent-8 p-1"
              type="text"
            />
            {errors.cnpj && <span><small>Por favor, coloque um CNPJ válido</small></span>}
            <label className="mt-4 font-semibold">Senha</label>
            <input
              {...register("senha", { required: true, minLength: 8 })}
              className="border-[1.4px] rounded-sm bg-[#E8E8E8] p-1"
              type={text ? "text" : "password"}
            />
            {errors.senha && (
              <span>
                <small>Por favor, coloque uma senha que contenha pelo menos 8
                caractéres</small>{" "}
              </span>
            )}
            <span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText(!text);
                }}
              >
                <p className="my-1 font-raleway font-medium text-xs">
                  Mostrar senha
                </p>
              </button>
            </span>
            <label className="mt-4 font-semibold">Confirmação da senha</label>
            <input
              className="mt-1 border-[1.4px] rounded-sm  bg-[#E8E8E8] p-1"
              type={text ? "text" : "password"}
            />
            <span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText(!text);
                }}
              >
                <p className="my-1 font-raleway font-medium text-xs">
                  Mostrar senha
                </p>
              </button>
            </span>
          </div>
          <div className="flex flex-col sm:grid grid-cols-2 grid-flow-col gap-4">
            <div>
              <p className="font-raleway sm:text-lg text-sm font-semibold p-2 border-2  bg-[#E8E8E8] text-center rounded-md">
                Entrar com Google
              </p>
            </div>
            <div>
              <p className="font-raleway sm:text-lg text-sm font-semibold p-2 border-2  bg-[#E8E8E8] text-center rounded-md">
                Esqueceu sua senha ?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 p-4 bg-[#7F23F7] rounded-md text-2xl font-raleway font-bold text-white">
            <input type="submit" value="Se cadastrar" />
          </div>
        </div>
      </form>
    </div>
  );
}
