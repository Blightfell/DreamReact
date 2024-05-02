
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./explore.css";

const BreadCrum = () => {
    return (
        <div className="container mx-auto  lg:px-16 2xl:px-[100px] py-4 px-6">
            <header className="header-mob lg:pb-7  lg:bg-transparent bg-[#2C2E2E] ">
                <h5>Welcome Back! Adam.</h5>
                <div className="float-right mt-[-23px] md:mt-[-13px] lg:mt-[-34px] flex items-center gap-4">
                    <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
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
            <form className="bg-[#2C2E2E] generate-form lg:h-16 2xl:h-20 shadow-2xl rounded-[40px] flex items-center justify-between p-4">
                <div className="flex items-center gap-5 2xl:gap-6 w-full">
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
    )
}

export default BreadCrum
