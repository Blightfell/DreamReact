import { useState } from 'react';
import './TagImages.css';
import Nav from "../../Commons/MobileNav/nav";
import { Button } from '@material-tailwind/react';
import SideBAr from '../../Commons/SideBar/SideBar';
import CongurationPopup from '../../Ui-Components/CongurationPopup';

const TagImages = () => {
    // Boxes information for the dashboard area
    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 101.svg", value: "15", text: "Images Tagged" },
    ];

    // Image rotation list
    const images = [
        "Assets/Images/Rateimages/18 - Ripley.png",
        "Assets/Images/Explore/37 - Jin and Jang.png",
        "Assets/Images/generate/42-Borum,The-Bloodsworn.png",
        "Assets/Images/generate/4 - Dream Totem.png",
        "Assets/Images/generate/48 - Star Ram.png",
    ];

    // States for tags, popup visibility, click count, and current image
    const [tags, setTags] = useState(Array(5).fill(''));
    const [popupVisible, setPopupVisible] = useState(false); // Congratulatory popup
    const [alertPopupVisible, setAlertPopupVisible] = useState(false); // Alert popup for exceeding limit
    const [clickCount, setClickCount] = useState(0); // Click count for the "Confirm" button
    const [currentImage, setCurrentImage] = useState(images[0]); // Initial image

    // Utility function to validate tags
    const isValidTag = (tag) => /^[a-z]+$/.test(tag); // Only lowercase letters, no symbols or spaces

    const handleChange = (index) => (e) => {
        const newValue = e.target.value.toLowerCase();
        if (isValidTag(newValue)) {
            setTags((prevTags) => {
                const updatedTags = [...prevTags];
                updatedTags[index] = newValue;
                return updatedTags;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        if (clickCount < 5) { // Change image if under limit
            setPopupVisible(true); // Show the popup
            setTimeout(() => {
                setPopupVisible(false); // Hide the popup after 5 seconds
                setClickCount((prevCount) => prevCount + 1); // Increment click count
                setCurrentImage(images[clickCount + 1]); // Change to the next image
            }, 5000);
        } else {
            setAlertPopupVisible(true); // Show alert popup if limit is reached
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="md:w-[19%] 2xl:w-[22%] sm-hidden">
                    <SideBAr />
                </div>
                <div className="md:w-full lg:w-[81%] 2xl:w-[78%] bg-[#3B3F3F] h-full sm-w-full">
                    <div className="mb-28">
                        <header className="header-mob lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] h-14 py-4  px-6">
                            <h5>Tag Images</h5>
                            <div className="float-right mt-[-23px] lg:mt-[-34px]">
                                <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
                            </div>
                        </header>
                        <div className="container mx-auto p-6 lg:px-16 2xl:px-[100px]">
                            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box sm-hidden">
                                {boxes.map((box, index) => (
                                    <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E] rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full">
                                        <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                            <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                                <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                            </div>
                                            <div>
                                                <p className="sm-hidden md:block">{box.text}</p>
                                                <h4>{box.value}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="TagImages-content grid grid-cols-12 gap-4 lg:gap-5 2xl:gap-6 lg:items-center 2xl:items-start">
                                <div className="col-span-12 lg:col-span-8">
                                    <h4 className="text-18-sm">Tag the image below</h4>
                                    <div>
                                        <img className="w-full mt-4" src={currentImage} alt="Current Image" /> {/* Updated image */}
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="Form col-span-12 lg:col-span-4 lg:px-0 lg:bg-transparent lg:mt-7 mt-0">
                                    <p className='mb-4'>Write 5 words you associate with this image. All lowercase, no symbols or spaces.</p>
                                    {tags.map((tag, index) => (
                                        <input
                                            key={index}
                                            className="focus:ring-blue-500 input-custom"
                                            type="text"
                                            placeholder={`Enter Tag ${index + 1}`}
                                            value={tag}
                                            onChange={handleChange(index)}
                                            required
                                        />
                                    ))}
                                    <Button type="submit" className="sub-button mt-4">
                                        Confirm
                                    </Button>
                                </form>
                                {popupVisible && ( /* Conditional rendering for the popup */
                                    <CongurationPopup />
                                )}
                                {alertPopupVisible && ( /* Alert popup after 5 image changes */
                                    <div className="popup-overlay">
                                        <div className="popup-alert rounded-3xl h-72 w-auto p-6 bg-slate-950 mx-auto">
                                            <h3>Limit Reached</h3>
                                            <p>You can only tag five times.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default TagImages;
