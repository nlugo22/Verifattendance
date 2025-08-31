import MenuBar from "./MenuBar";

const ViewBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-cyan-500 shadow-lg rounded-2xl bg-black w-11/12 h-10/12">
        <MenuBar />
      </div>
    </div>
  )
}

export default ViewBox;
