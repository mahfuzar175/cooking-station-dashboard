import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../Pages/Dashboard.css';
import { FaHome } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { BiSolidDish } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex justify-content-between custom-margin">
      {/* Left side (fixed width) */}
      <div className='min-vh-100 left-background text-white d-lg-block d-none text-left px-5 py-3'>
        <h2>Hi!</h2>
        <p>Mahfuzar Rahman Tarek</p>
        <Nav.Link className={`mt-5 ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabClick('dashboard')}>
          <RxDashboard className='mb-1' /><span className='mx-2'>Dashboard</span>
        </Nav.Link>
        <Nav.Link className={`mt-2 ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          <FaHome className='mb-1'/><span className='mx-2'>Home</span>
        </Nav.Link>
        <Nav.Link className={`mt-2 ${activeTab === 'link' ? 'active' : ''}`} onClick={() => handleTabClick('link')}>
          Link
        </Nav.Link>
      </div>

      {/* Right side (takes remaining width) */}
      <div className='w-100 w-lg-75 padding-right-side min-vh-100' >
        {activeTab === 'dashboard' && (
          <div>
            <div className='d-lg-flex justify-content-between'>
                <div className='d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2'>
                  
                  <div className='fw-semibold'>
                  <h2 className=' fs-4'>Total Resturent</h2>
                  <p className=' fs-2 '>54</p>
                  
                  </div>
                  <h2 className='icon-font'><BiSolidDish /></h2>
                </div>
                <div className='d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2'>
                  
                  <div className='fw-semibold'>
                  <h2 className=' fs-4'>Total Menus</h2>
                  <p className=' fs-2 '>32</p>
                  
                  </div>
                  <h2 className='icon-font text-danger'><FaBowlFood /></h2>
                </div>
                <div className='d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2'>
                  
                  <div className='fw-semibold'>
                  <h2 className=' fs-4'>Total Customers</h2>
                  <p className=' fs-2 '>254</p>
                  
                  </div>
                  <h2 className='icon-font text-primary'><FaUserGroup  /></h2>
                </div>
                <div className='d-flex justify-content-between gap-2 rounded-3 p-2 border bg-white mt-lg-0 mt-2'>
                  
                  <div className='fw-semibold'>
                  <h2 className=' fs-4'>Total Salses</h2>
                  <p className=' fs-2 '>$4554</p>
                  
                  </div>
                  <h2 className='icon-font text-success'><GiTakeMyMoney /></h2>
                </div>
            </div>
          </div>
        )}
        {activeTab === 'home' && (
          <div>
            <h2>tarek</h2>
          </div>
        )}
        {activeTab === 'link' && (
          <div>
            <h2>Link Content</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
