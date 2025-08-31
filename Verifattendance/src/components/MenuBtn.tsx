
interface MenuBtnProps {
  btnName: string;
  selected: boolean;
  onClick: () => void;
}

const MenuBtn = ( {btnName, selected, onClick}: MenuBtnProps) => {
  return (
    <button 
      className={`w-32 px-4 py-2 text-base rounded cursor-pointer hover:bg-blue-100 ${selected ? "bg-blue-300" : "bg-blue-500"}`}
      onClick={onClick}
    >{btnName}</button>
  )
}

export default MenuBtn
