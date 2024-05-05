
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./explore.css";
import DowloadPWA from "../../Ui-Components/DowloadPWA";
import UserProfile from "../../Ui-Components/UserProfile";

const BreadCrum = () => {
    return (
        <>
            <header className="header-mob py-4 px-6 bg-[#2C2E2E] lg:hidden">
                <h5>Welcome Back! Adam.</h5>
                <div className="float-right mt-[-23px]  md:mt-[-13px] lg:mt-[-39px] flex items-center gap-4">
                    {/* <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" /> */}
                    <Link className='sm-hidden' to="/MyProfile">
                        <img className='lg:h-8 2xl:h-10' src="Assets/Images/All Icons/Ellipse 2.svg" alt="" />
                    </Link>
                    <div className='lg:hidden'>
                        <Link to="/">
                            <img src="Assets/Images/All Icons/Group 177.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="lg:px-16 2xl:px-[100px] py-4 px-6">
                <header className="header-mob sm-hidden md:hidden lg:block   pb-4 lg:pb-6 2xl:pt-3 2xl:pb-7 lg:bg-transparent bg-[#2C2E2E] ">
                    <div className="flex items-center justify-between w-full">
                        <h5>Welcome Back! Adam.</h5>
                        <div className="sm-hidden lg:block 2xl:block">
                            <div className="flex gap-5 2xl:gap-6">
                                <DowloadPWA />
                                <UserProfile />
                            </div>
                        </div>
                    </div>
                </header>
                <form className="bg-[#2C2E2E] generate-form lg:h-16 2xl:h-20 shadow-2xl rounded-[40px] w-full flex items-center justify-between px-3 py-2 md:p-4">
                    <div className="flex items-center gap-3 md:gap-5 2xl:gap-6 w-full">
                        <label htmlFor="">
                            <img src="Assets/Images/All%20Icons/Group%2013.svg" alt="" />
                        </label>
                        <input
                            className="w-full"
                            placeholder="Describe what you want to see here"
                            type="text"
                        />
                    </div>
                    <Link to="/Generate">
                        <Button>Generate</Button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default BreadCrum
