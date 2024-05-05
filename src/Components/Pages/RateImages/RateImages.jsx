import { useState } from 'react';
import './RateImages.css';
import { AiFillLike } from "react-icons/ai";
// import RateImagesPopup from "../../Ui-Components/RateImagesPopUp";
import Nav from "../../Commons/MobileNav/nav";
import SideBAr from '../../Commons/SideBar/SideBar';
import CongurationPopup from '../../Ui-Components/CongurationPopup';
import DowloadPWA from '../../Ui-Components/DowloadPWA';
import UserProfile from '../../Ui-Components/UserProfile';

const RateImages = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleImageClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // Hide the popup after 5 seconds
    };

    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 37.svg", value: "20/25", text: "Paid Ratings Limits" },
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "100", text: "$Dream Earned" },
        { iconSrc: "Assets/Images/All Icons/Group 82.svg", value: "More Ratings Unlock in", text: "18hrs 37min" },
    ];
    return (
        <>
            <div className="flex justify-between">
                <div className="2xl:w-[300px] md:w-[19%] sm-hidden">
                    <SideBAr />
                </div>
                <div className=" md:w-full lg:w-[81%] 2xl:w-full   h-full sm-w-full">
                    <div className='mb-10 2xl:mb-0'>
                        <nav className='h-[80px] lg:h-auto'>
                            <header className="header-mob lg:relative absolute top-0 w-full z-[999] lg:px-16 2xl:px-[100px] 2xl:pt-7 lg:bg-transparent bg-[#2C2E2E] py-4 px-6">
                                <div className="flex items-center justify-center lg:justify-between w-full">
                                    <div>
                                        <h5>Rate Images</h5>
                                        <p className='text-center sm:block lg:hidden pt-2'>More Ratings Unlock in 18h 37m</p>
                                    </div>
                                    <div className="sm-hidden lg:block">
                                        <div className="flex gap-5 2xl:gap-6">
                                            <DowloadPWA />
                                            <UserProfile />
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </nav>
                        <div className="p-6 2xl:pb-0 md:px-16 2xl:px-[100px] rateimages-content">
                            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box">
                                {boxes.map((box, index) => (
                                    <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E] rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full mini-desh-box">
                                        <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                            <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                                <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                            </div>
                                            <div>
                                                <p className="xs-hidden md:block">{box.text}</p>
                                                <h4>{box.value}</h4>
                                            </div>
                                        </div>
                                        <p className="sm:block md:hidden">{box.text}</p>
                                    </div>
                                ))}
                            </div>
                            <h3 className="my-4 text-40 lg:mt-11 lg:mb-6 2xl:mb-10 2xl:mt-14">
                                Select the Image you prefer
                            </h3>
                            {/* <RateImagesPopup /> */}
                            <div>
                                <div className="rateimages mb-12">
                                    <div className="">
                                        <div className="image-container" onClick={handleImageClick}>
                                            <img src="Assets/Images/Rateimages/Component 21.png" alt="Image 1" />
                                            <div className="hover-overlay">
                                                <AiFillLike size={40} color="#ffffff" />
                                            </div>
                                        </div>
                                        <p>a large illustrative background showing simple and minimalistic ancient statues, symmetrical, light grey and blue color palette high resolution, high contrast, cinematic, mysterious atmosphere, clean, alien atmosphere --ar 2:1 --s 250 --v 6.0</p>
                                    </div>
                                    <div className="">
                                        <div className="image-container" onClick={handleImageClick}>
                                            <img src="Assets/Images/Rateimages/Component 22.png" alt="Image 2" />
                                            <div className="hover-overlay">
                                                <AiFillLike size={40} color="#ffffff" />
                                            </div>
                                        </div>
                                        <p>a large illustrative background showing simple and minimalistic ancient statues, symmetrical, light grey and blue color palette high resolution, high contrast, cinematic, mysterious atmosphere, clean, alien atmosphere --ar 2:1 --s 250 --v 6.0</p>
                                    </div>
                                </div>

                                {showPopup && (
                                    <CongurationPopup />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Nav />
        </>
    )
}

export default RateImages
