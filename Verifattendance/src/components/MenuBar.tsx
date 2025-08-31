import { useState } from "react";
import MenuBtn from "./MenuBtn";

const MenuBar = () => {
  const [selectedBtn, setSelectedBtn] = useState<String | null>("");
  const buttons = ["Calendar", "Attendance", "Classes"];

  return (
    <div className="flex border-4 rounded-2xl border-r-red-500 bg-white w-1/9 h-full">
      <div className="flex flex-col items-center w-full gap-2 mt-2">
        {buttons.map((name) => (
          <MenuBtn key={name} btnName={name} selected={selectedBtn === name} onClick={() => setSelectedBtn(name)} />
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
