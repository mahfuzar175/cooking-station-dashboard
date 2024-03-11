import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "../Pages/Dashboard.css";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidDish } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import OffCanvasNavBar from "../components/OffCanvasNavBar";
import { GrLogout } from "react-icons/gr";
import PieChartComponent from "../components/PieChartComponent";
import OrderderedByStatus from "../components/OrderedByStatus";
import BestSellingItems from "../components/BestSellingItems";
import OrderByPaymentTypeAndSource from "../components/OrderByPaymentTypeAndSource";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <OffCanvasNavBar onTabClick={handleTabClick}></OffCanvasNavBar>
      <div className="d-flex justify-content-between custom-margin">
        <div className="min-vh-100 left-background text-white d-lg-block d-none text-left px-5 py-3">
          <h2>Hi!</h2>
          <p>Mahfuzar Rahman Tarek</p>
          <Nav.Link
            className={`mt-5 ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
          >
            <FaHome className="mb-1" />
            <span className="mx-2">Home</span>
          </Nav.Link>
          <Nav.Link
            className={`mt-2 ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => handleTabClick("dashboard")}
          >
            <RxDashboard className="mb-1" />
            <span className="mx-2">Dashboard</span>
          </Nav.Link>

          <Nav.Link className="mt-2" href="/">
            <GrLogout className="mb-1" />
            <span className="mx-2">Sign out</span>
          </Nav.Link>
        </div>

        {/* Right side (takes remaining width) */}
        <div className="w-100 w-lg-75 padding-right-side min-vh-100">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-center mb-3 fw-bold text-uppercase ">
                Dashboard
              </h2>
              <div className="d-flex flex-lg-row flex-column justify-content-center justify-content-lg-between">
                <div className="w-50 flex justify-content-center align-content-center">
                  <PieChartComponent />
                  <div className="mt-4 d-flex">
                    <h2 className="fs-5 ">Total Meals: </h2>
                    <p className="fs-5 fw-bold mx-2">54</p>
                  </div>
                  <div>
                    <Button variant="primary">My Meal Appoinment</Button>{" "}
                  </div>
                  <div className="mt-5">
                    <Button variant="primary">Emergency Guest Meal</Button>{" "}
                  </div>
                  <p className="text-danger">Before 3 hours</p>
                </div>
                <div>
                  <div>
                    <Button variant="primary">Active</Button>{" "}
                    <p className="fs-5 fw-bolder">MD MAHFUZAR RAHMAN TAREK</p>
                  </div>
                  <div className="mt-4">
                    <h2 className="fs-5">Your Balance: </h2>
                    <p className="fs-1 fw-bold">$300</p>
                  </div>

                  <div className="mt-4">
                    <h2 className="fs-5">Active Status: </h2>
                    <p className="fs-5 text-primary">
                      Your 2 Times Meal Available (Guest Meal Allow)
                    </p>
                    <p className="fs-5 text-warning">
                      Your 2 Times Meal Available (Guest Meal Allow)
                    </p>
                    <p className="fs-5 text-danger">Your Meal Off</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "home" && (
            <div>
              <div className="d-lg-flex justify-content-between">
                <div className="d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2">
                  <div className="fw-semibold">
                    <h2 className=" fs-4">Total Resturent</h2>
                    <p className=" fs-2 ">54</p>
                  </div>
                  <h2 className="icon-font">
                    <BiSolidDish />
                  </h2>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2">
                  <div className="fw-semibold">
                    <h2 className=" fs-4">Total Menus</h2>
                    <p className=" fs-2 ">32</p>
                  </div>
                  <h2 className="icon-font text-danger">
                    <FaBowlFood />
                  </h2>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2">
                  <div className="fw-semibold">
                    <h2 className=" fs-4">Total Customers</h2>
                    <p className=" fs-2 ">254</p>
                  </div>
                  <h2 className="icon-font text-primary">
                    <FaUserGroup />
                  </h2>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2">
                  <div className="fw-semibold">
                    <h2 className=" fs-4">Total Salses</h2>
                    <p className=" fs-2 ">$4554</p>
                  </div>
                  <h2 className="icon-font text-success">
                    <GiTakeMyMoney />
                  </h2>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-content-center gap-3">
                <div className="w-100 w-lg-50 d-flex flex-column">
                  <div className="bg-white p-2 mt-3 rounded-3">
                  <h2 className="text-center fs-5 mt-3 fw-bolder">Order Status Distribution</h2>
                  <OrderderedByStatus></OrderderedByStatus>
                  </div>
                  <div className="bg-white p-2 mt-3 rounded-3">
                  <h2 className="text-center fs-5 mt-3 fw-bolder">Order By Payment Type and Source</h2>
                  <OrderByPaymentTypeAndSource></OrderByPaymentTypeAndSource>
                  </div>
          
                </div>
                <div className="w-100 w-lg-50 mt-lg-0 mt-4 text-center">
                  <div className="bg-white p-2 mt-3 rounded-3">
                  <h2 className="text-center fs-5 mt-3 fw-bolder">Best Selling Items</h2>
                  <BestSellingItems></BestSellingItems>
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
