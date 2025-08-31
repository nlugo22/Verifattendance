import { useState } from "react";
import MenuBtn from "./MenuBtn";

const MenuBar = () => {
  const [selectedBtn, setSelectedBtn] = useState<String | null>("");
  const buttons = ["Calendar", "Attendance", "Classes"];

  return (
    <div className="flex rounded-2xl bg-white/20 backdrop-blur-lg w-1/10 shadow-lg h-[calc(100%-1rem)] m-2">
      <div className="flex flex-col items-center w-full gap-2 mt-2">
        {buttons.map((name) => (
          <MenuBtn key={name} btnName={name} selected={selectedBtn === name} onClick={() => setSelectedBtn(name)} />
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
