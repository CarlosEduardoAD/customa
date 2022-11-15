import { TableHelper } from "../components/Menu/TableHelper";
import { Button } from "../utils/Button";
import { PlusCircle, MagnifyingGlass } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { CadastroClientesModal } from "../components/CadastroClientes/CadastroClientesModal";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export function Menu() {
  const [records, setRecords] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const sessionPass = sessionStorage.getItem('senha')
    if (!sessionPass){
      navigate('/cadastro')
    }
    axios.get("http://localhost:3000/api/v1/countTable").then((res) => {
      setRecords(JSON.parse(res.data.numberOfRecords))
    })
  }, []);

  return (
    <div className="">
      <Dialog.Root>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:flex  sm:ml-12 lg:ml-[150.8px] -space-x-36 mt-12">
          <div className="z-10">
            <Dialog.Trigger className=" px-2 py-4 sm:p-2 bg-violet-500 font-raleway sm:text-md text-xl text-white font-semibold rounded-lg">
              Adicionar cliente
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/70 inset-0 z-20 fixed">
                <Dialog.Content>
                  <div className="z-20">
                    <CadastroClientesModal></CadastroClientesModal>
                  </div>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </div>
          <div className="lg:ml-12">
            <div className="sm:flex items-center justify-center">
              <input
                className="bg-glass bg-no-repeat bg-[center_left_0.35rem] ml-36 sm:p-1 p-2 lg:w-[240px] w-[270px] sm:ml-48 mt-2 border-2 bg-[#F2F2F2] sm:indent-8 rounded-lg font-raleway text-sm"
                type="email"
                placeholder="Pesquisar..."
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#666D73] ml-40 mt-3 font-raleway font-semibold sm:block hidden">
              {" "}
              Registros: {records}{" "}
            </p>
          </div>
        </div>
        <TableHelper></TableHelper>
      </Dialog.Root>
    </div>
  );
}
