export function Footer() {
  return (
    <div className="hidden sm:grid grid-cols-3 grid-flow-col font-raleway font-semibold mt-8 mb-8 h-full">
      <div className="mr-24">
        <p className="font-bold font-raleway ml-12 text-2xl">Costuma</p>
      </div>
      <div className="flex gap-24">
        <p className="text-sm">Sobre a empresa</p>
        <p className="text-sm">Nossos valores</p>
        <p className="text-sm">Conglomerado Unite</p>
      </div>
      <div className=" lg:text-sm lg:text-center lg:ml-24 ml-48 pr-4">
        <p>&#169; Direitos reservados</p>
      </div>
    </div>
  );
}
