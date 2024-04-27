import { useState } from 'react';
import './RateImages.css';
import { AiFillLike } from "react-icons/ai";
// import RateImagesPopup from "../../Ui-Components/RateImagesPopUp";
import Nav from "../../Commons/MobileNav/nav";

const RateImages = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleImageClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 4000); // Hide the popup after 5 seconds
    };

    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 37.svg", value: "20/25", text: "Paid Ratings Limits" },
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "100", text: "$Dream Earned" },
    ];
    return (
        <>
            <div className='mb-10 relative'>
                <nav className='h-[80px]'>
                    <header className="header-mob  absolute top-0 w-full z-[999]  bg-[#2C2E2E]">
                        <div className='py-4 px-6'>
                            <div>
                                <h5>Rate Images</h5>
                                <p className='text-center pt-2'>More Ratings Unlock in 18h 37m</p>
                            </div>
                            <div className="float-right mt-[-47px]">
                                {/* <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" /> */}
                            </div>
                        </div>
                    </header>
                </nav>
                <div className="container mx-auto  p-6">
                    <div className="grid grid-cols-2 gap-4 desh-box">
                        {boxes.map((box, index) => (
                            <div key={index} className="p-2 bg-[#2C2E2E] rounded-lg w-full">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="rounded-md p-2 bg-[#222222]">
                                        <img className='h-4' src={box.iconSrc} alt="" />
                                    </div>
                                    <h4>{box.value}</h4>
                                </div>
                                <p>{box.text}</p>
                            </div>
                        ))}
                    </div>
                    <h4 className="text-18-sm my-4">
                        Select the Image you prefer
                    </h4>
                    {/* <RateImagesPopup /> */}
                    <div>
                        <div className="flex flex-wrap flex-col rateimages gap-4 mb-12">
                            <div className="image-container" onClick={handleImageClick}>
                                <img src="Assets/Images/Rateimages/Component 21.png" alt="Image 1" />
                                <div className="hover-overlay">
                                    <AiFillLike size={40} color="#ffffff" />
                                </div>
                            </div>

                            <div className="image-container" onClick={handleImageClick}>
                                <img src="Assets/Images/Rateimages/Component 22.png" alt="Image 2" />
                                <div className="hover-overlay">
                                    <AiFillLike size={40} color="#ffffff" />
                                </div>
                            </div>
                        </div>

                        {showPopup && (
                            <div className="popup-overlay"> {/* This provides the black transparent background */}
                                <div className={`popupbagde px-4 py-3 flex items-center gap-2 show`}>
                                    <div className='bg-[#0E6400] rounded-[50%] p-3'>
                                        <img src="Assets/Images/All Icons/Group 90.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>Congratulations!</h3>
                                        <p>You Earned 10 $Dream</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default RateImages
