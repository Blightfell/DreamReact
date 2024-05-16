
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Header from "../../Commons/Header";
import "./explore.css";
const BreadCrum = () => {
    return (
        <>
            <Header title={'Welcome Back! Adam.'} displayButton={false} />
            <div className="lg:px-16 2xl:px-[100px] pb-4 px-6">
                <form className="bg-[#2C2E2E] generate-form lg:h-16 2xl:h-20 shadow-2xl rounded-[40px] w-full flex items-center justify-between ps-6 pr-4 py-4">
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
