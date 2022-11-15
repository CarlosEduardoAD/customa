export function Button({text, handleClick, icon}) {
  return <div>
    <button className="p-2 bg-[#7F23F7] rounded-md text-md font-raleway font-semibold text-white flex" onClick={handleClick}><i className="mt-[0.7px] mr-1">{icon}</i>{text}</button>
  </div>;
}
