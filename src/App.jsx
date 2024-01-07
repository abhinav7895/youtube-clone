import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";



const App = () => {
  return (

      <div className="">
        <Header />
        <div className="flex overflow-y-auto mt-10">
          <SideBar />
          <Outlet/>
        </div>
      </div>

  );
};

export default App;
