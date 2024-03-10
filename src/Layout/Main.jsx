import { Outlet } from "react-router-dom";
import OffCanvasNavBar from "../components/OffCanvasNavBar";




const Main = () => {
  return (
    <div>
      <OffCanvasNavBar></OffCanvasNavBar>
        <Outlet></Outlet>
    </div>
  );
};

export default Main;