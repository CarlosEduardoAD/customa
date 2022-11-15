import { useState } from "react";
import {
  ArrowSquareOut,
  IdentificationCard,
  Password,
  X,
  At,
  AddressBook,
  Phone,
} from "phosphor-react";
import typo from "../../assets/typo.svg";
import card_id from "../../assets/card-id.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  nomeCliente: string;
  email: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  cep: string;
}

export function CadastroClientesModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const createCustomerData = (data: FormData) => {
    console.log(data);
    let nome = JSON.stringify(data.nomeCliente);
    let email = JSON.stringify(data.email);
    let CNPJ = JSON.stringify(data.cnpj);
    let telefone = JSON.stringify(data.telefone);
    let endereco = JSON.stringify(data.endereco);
    let cep = JSON.stringify(data.cep);
    const preparedData = {
      nome: nome,
      email: email,
      cnpj: CNPJ,
      telefone: telefone,
      endereco: endereco,
      cep: cep,
    };
    axios.post("http://localhost:3000/api/v1/insertUsers", preparedData);

  };

  return (
    <div className="flex sm:flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(createCustomerData)}>
        <div className="sm:mx-0 z-10 bg-white rounded-lg shadow-xl shadow-violet-400 sm:px-12 mt-2 py-4 px-4 w-[300px] sm:w-auto h-[625px]">
          <p className="flex font-raleway font-bold lg:text-3xl sm:text-xl text-lg text-start mb-1">
            <i>
              <ArrowSquareOut size={32} color={"#7F23F7"} />
            </i>
            <span className="ml-2">Novo Cliente</span>
          </p>
          <span className="hidden sm:block">
            <svg
              version="1.1"
              id="line_2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="400px"
              height="5px"
            >
              <path
                className="path2"
                fill="gray"
                stroke-width="2"
                stroke="gray"
                d="M0 0 l1120 0"
              />
            </svg>
          </span>
          <span className="block sm:hidden">
            <svg
              version="1.1"
              id="line_2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="250px"
              height="5px"
            >
              <path
                className="path2"
                fill="gray"
                stroke-width="2"
                stroke="gray"
                d="M0 0 l1120 0"
              />
            </svg>
          </span>
          <div className="flex flex-col  mt-2 font-raleway ">
            <div className="flex mt-2">
            <label className=" font-semibold">Nome do cliente</label>
            {errors.nomeCliente && (
                <span className="text-center ml-2 ">
                  <small>Nome inválido</small>
                </span>
              )}
            </div>
            <input
              className="bg-nome bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm sm:w-[430px] bg-[#E8E8E8] indent-5 p-1"
              type="text"
              {...register("nomeCliente", { required: true })}
            />
            <div className="flex mt-4">
              <label className=" font-semibold">E-mail</label>
              {errors.email && (
                <span className="text-center ml-2 ">
                  <small>Email inválido</small>
                </span>
              )}
            </div>
            <input
              className="bg-email bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm indent-5 bg-[#E8E8E8] p-1"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
              })}
            />
            <div className="flex mt-4">
            <label className="font-semibold">Telefone</label>
            {errors.telefone && (
              <span>
                <small className="text-center ml-2">Telefone inválido</small>
              </span>
            )}
            </div>
            <input
              className="bg-phone bg-no-repeat bg-[center_left_0.35rem] border-[1.4px] rounded-sm indent-5 bg-[#E8E8E8] p-1"
              type="text"
              {...register("telefone", { required: true })}
            />
            <div className="flex mt-4">
            <label className="text-center font-semibold">CNPJ</label>
            {errors.cnpj && (
              <span>
                <small className="text-center ml-2">CNPJ inválido</small>
              </span>
            )}
            </div>
            <input
              className="bg-cnpj bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm indent-5 bg-[#E8E8E8] p-1"
              type="text"
              {...register("cnpj", {
                required: true,
                pattern: /\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
              })}
            />
            <div className="flex mt-4">
            <label className="text-center font-semibold">Endereço</label>
            {errors.endereco && (
              <span>
                <small className="ml-2">Endereço cliente</small>
              </span>
            )}
            </div>
            <input
              className="bg-nome bg-no-repeat bg-[center_left_0.35rem] mt-1 border-[1.4px] rounded-sm indent-5 bg-[#E8E8E8] p-1"
              type="text"
              {...register("endereco", { required: true })}
            />
            <div className="flex mt-4">
            <label className="text-center font-semibold">CEP</label>
            {errors.cep && (
              <span>
                <small className="ml-2">CEP inválido</small>
              </span>
            )}
            </div>
            <input
              className="mt-1 border-[1.4px] rounded-sm  indent-5 bg-[#E8E8E8] p-1"
              type="text"
              {...register("cep", { required: true })}
            />
          </div>
          <div className="flex items-center justify-center mt-2 p-4 bg-[#7F23F7] rounded-md text-lg font-raleway font-bold text-white">
            <input type="submit" value="Cadastrar cliente" />
          </div>
          <Dialog.Close>
            <div className="fixed sm:top-5 top-5 font-raleway font-semibold sm:ml-[435px] ml-[254px]">
              <X size={22}></X>
            </div>
          </Dialog.Close>
        </div>
      </form>
    </div>
  );
}
