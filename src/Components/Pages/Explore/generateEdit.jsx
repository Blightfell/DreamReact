import { Link } from "react-router-dom";
import "./explore.css";
import { Button } from "@material-tailwind/react";
import BreadCrum from "./BreadCrum";
import SideBAr from "../../Commons/SideBar/SideBar";
const generateEdit = () => {
    const buttons = [
        { id: 1, label: "Upscale (Subtle)", link: "#", icon: "Assets/Images/All Icons/Group 85b.svg" },
        { id: 2, label: "Upscale (Creative)", link: "#", icon: "Assets/Images/All Icons/Group 85b.svg" },
        { id: 3, label: "Vary (Subtle)", link: "#", icon: "Assets/Images/All Icons/Group 86.svg" },
        { id: 4, label: "Vary (Strong)", link: "#", icon: "Assets/Images/All Icons/Group 86.svg" },
    ];
    return (
        <>
            <div className="flex justify-between ">
                <div className="sm-hidden 2xl:w-[300px] md:w-[19%] sm:w-0">
                    <SideBAr />
                </div>
                <div className=" md:w-full lg:w-[81%] 2xl:w-full   h-full sm-w-full">
                    <BreadCrum />
                    <div className=" p-6 md:px-16 2xl:px-[100px] h-full">
                        <p className="generate-img-text mb-9 2xl:mb-14">a large illustrative background showing simple and minimalistic ancient statues, symmetrical, light grey and blue color palette high resolution, high contrast, cinematic, mysterious atmosphere, clean, alien atmosphere --ar 2:1 --s 250 --v 6.0 - <span className="text-[#AEAEAE] text-base">by</span>  <span className='bg-[#2C2E2E] rounded-3xl py-1 px-3 text-white text-sm'>
                            @Flook
                        </span> </p>
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-12 lg:col-span-7">
                                <img src="Assets/Images/generate/4 - Dream Totem.png" alt="" />
                            </div>
                            <div className="col-span-12 lg:col-span-5">
                                <ul className="regenerate-box-btn">
                                    {buttons.map((button) => (
                                        <li
                                            key={button.id}
                                            className="bg-[#2C2E2E] rounded-2xl flex items-center  h-16 2xl:h-24 w-full hover:bg-[#3A3B3B] mb-4 2xl:mb-6"
                                        >
                                            <Link className="w-full" to={button.link}>
                                                <Button className="flex items-center gap-4 2xl:gap-6 w-full">
                                                    <img src={button.icon} alt={button.label} className="h-6 w-6" />
                                                    {button.label}
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default generateEdit
