import { Link } from "react-router-dom";
import "./explore.css";
import { Button } from "@material-tailwind/react";
import BreadCrum from "./BreadCrum";
import SideBAr from "../../Commons/SideBar/SideBar";

const generate = () => {
    const listItems = [
        { id: 1, label: 'U1', link: '/GenerateEdit' },
        { id: 2, label: 'V1', link: '#' },
        { id: 3, label: 'U2', link: '/GenerateEdit' },
        { id: 4, label: 'V2', link: '/GenerateEdit' },
        { id: 5, label: 'U3', link: '#' },
        { id: 6, label: 'V3', link: '#' },
        { id: 7, label: 'U4', link: '/GenerateEdit' },
        { id: 8, label: 'V4', link: '/GenerateEdit' },
        // Add more items as needed
    ];
    return (
        <>
            <div className="flex justify-between">
                <div className="sm-hidden 2xl:w-[300px] md:w-[19%]">
                    <SideBAr />
                </div>
                <div className=" md:w-full lg:w-[81%] 2xl:w-full   h-full sm-w-full">
                    <BreadCrum />
                    <div className=" p-6 2xl:pt-10 md:px-16 2xl:px-[100px]">
                        <div className="generate-img">
                            <p className="generate-img-text mb-9 2xl:mb-10">a large illustrative background showing simple and minimalistic ancient statues, symmetrical, light grey and blue color palette high resolution, high contrast, cinematic, mysterious atmosphere, clean, alien atmosphere --ar 2:1 --s 250 --v 6.0 - <span className="text-[#AEAEAE] text-base">by</span>  <span className='bg-[#2C2E2E] rounded-3xl py-1 px-3 text-white text-sm'>
                                @Flook
                            </span> </p>

                            <div className="grid grid-cols-12 gap-6 ">
                                <div className="w-auto col-span-12 lg:col-span-10">
                                    <div className="grid grid-cols-2 w-auto">
                                        <img className="w-full" src="Assets/Images/generate/48 - Star Ram.png" alt="" />
                                        <img className="w-full" src="Assets/Images/generate/42-Borum,The-Bloodsworn.png" alt="" />
                                        <img className="w-full" src="Assets/Images/generate/42-Borum,The-Bloodsworn.png" alt="" />
                                        <img className="w-full" src="Assets/Images/generate/46 - Chapoya.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-2">
                                    <div className="flex justify-between flex-col h-full">
                                        <ul className="regenerate-box-btn grid grid-cols-4 lg:grid-cols-2 gap-6">
                                            {listItems.map((item) => (
                                                <li
                                                    key={item.id} // Unique key for React lists
                                                    className="bg-[#2C2E2E] rounded-2xl flex items-center justify-center h-16 w-16 2xl:h-24 2xl:w-24 hover:bg-[#3A3B3B] "
                                                >
                                                    <Link to={item.link}>
                                                        <Button className="w-full">
                                                            {item.label}
                                                        </Button>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <li className="bg-[#2C2E2E] rounded-2xl flex items-center justify-center h-16 w-16 2xl:h-24 2xl:w-24 hover:bg-[#3A3B3B]">
                                            <Link to="/"><img src="Assets/Images/All Icons/Group 62.svg" alt="" /></Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default generate
