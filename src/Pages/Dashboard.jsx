import { Nav } from 'react-bootstrap';
import '../Pages/Dashboard.css'
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const Dashboard = () => {
    return (
        <div className="d-flex justify-content-between custom-margin">
            <div className='min-vh-100 left-background text-white d-lg-block d-none text-left px-5 py-3'>
                <h2>Hi!</h2>
                <p>Mahfuzar Rahman Tarek</p>
                <Nav.Link className='mt-5' href="#action1"><RxDashboard className='mb-1' /><span className='mx-2'>Dashboard</span></Nav.Link>
                  <Nav.Link className='mt-2' href="#action2"><FaHome className='mb-1'/><span className='mx-2'>Home</span></Nav.Link>
                  <Nav.Link className='mt-2' href="#action3">Link</Nav.Link>

            </div>
            <div className='w-100 w-lg-75 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 p-2'>
                <h2>tarek</h2>
                <h2>tarek</h2>
                <h2>tarek</h2>
            </div>
        </div>
    );
};

export default Dashboard;