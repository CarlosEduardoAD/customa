import { HomeContactHelper } from "../components/Home/HomeContactHelper";
import { HomeImageHelper } from "../components/Home/HomeImageHelper";
import { HomePresentationHelper } from "../components/Home/HomePresentationHelper";

export function Home() {
  return (
    <div>
      <HomeImageHelper></HomeImageHelper>
      <div className="flex items-center justify-center mt-12">
        <p className="font-raleway font-bold text-2xl p-4 text-center">
          Empresas que trabalham conosco
        </p>
      </div>
      <section className="flex flex-col gap-20 sm:grid sm:grid-cols-3 sm:grid-flow-col mt-8 mb-24">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl mb-2 font-semibold">Krona</p>
          <small className="text-center pl-12 pr-12 sm:pl-2 sm:pr-2">
            Quando o assunto é gerenciar clientes, foi provavelmente <br /> a melhor
            solução que usamos até hoje.
          </small>
        </div>
        <div className="flex flex-col items-center justify-center pl-12 pr-12 sm:pl-2 sm:pr-2">
          <p className="text-2xl mb-2 font-semibold">Tigre</p>
          <small className="text-center">
            Uma de nossas principais aliadas na gestão de pessoas, é
            ridiculamente fácil usar a plataforma, até mesmo para uma pessoas
            sem nenhuma experiência.
          </small>
        </div>
        <div className="flex flex-col items-center justify-center pl-12 pr-12 sm:pl-2 sm:pr-2">
          <p className="text-2xl mb-2 font-semibold">TOTVS</p>
          <small className="text-center">
            Gerenciar software e pessoas são duas tarefas complicadas, passamos
            a usar o Costuma, agora só temos uma tarefa complicada pelo menos.
          </small>
        </div>
      </section>
      <HomePresentationHelper></HomePresentationHelper>
      <HomeContactHelper></HomeContactHelper>
    </div>
  );
}
