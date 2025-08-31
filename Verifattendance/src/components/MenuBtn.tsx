
interface MenuBtnProps {
  btnName: string;
  selected: boolean;
  onClick: () => void;
}

const MenuBtn = ( {btnName, selected, onClick}: MenuBtnProps) => {
  return (
    <button 
      className={`w-32 px-4 py-2 text-base rounded cursor-pointer text-white hover:bg-cyan-500/80 ${selected ? "bg-cyan-500/60" : "bg-cyan-500/30"}`}
      onClick={onClick}
    >{btnName}</button>
  )
}

export default MenuBtn
