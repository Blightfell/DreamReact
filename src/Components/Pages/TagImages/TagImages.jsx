import { useState } from 'react';
import './TagImages.css';
import Nav from "../../Commons/MobileNav/nav";

import { Button } from '@material-tailwind/react';

const TagImages = () => {
    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 101.svg", value: "15", text: "Images Tagged" },
    ];
    // Initialize an array of states for tags
    const [tags, setTags] = useState(Array(5).fill('')); // 5 tags initially set to empty strings

    // Utility function to validate input
    const isValidTag = (tag) => {
        return /^[a-z]+$/.test(tag); // Only lowercase letters, no symbols or spaces
    };

    const handleChange = (index) => (e) => {
        const newValue = e.target.value.toLowerCase();
        if (isValidTag(newValue)) {
            // Update the specific tag at index
            setTags((prevTags) => {
                const updatedTags = [...prevTags];
                updatedTags[index] = newValue; // Set the new value at the specified index
                return updatedTags;
            });
        }
    };

    return (
        <>
            <div className='mb-28'>
                <header className="header-mob lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] h-14 py-4  px-6">
                    <h5>Tag Images</h5>
                    <div className="float-right mt-[-23px] lg:mt-[-34px]">
                        <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
                    </div>
                </header>
                <div className="container mx-auto p-6 lg:px-16 2xl:px-[100px]">
                    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box sm-hidden">
                        {boxes.map((box, index) => (
                            <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E]  rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full">
                                <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                    <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                        <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                    </div>
                                    <div>
                                        <p className="sm-hidden md:block">{box.text}</p>
                                        <h4>{box.value}</h4>
                                    </div>
                                </div>
                                <p className="sm:block md:hidden">{box.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="TagImages-content grid grid-cols-12 gap-4 lg:gap-5 2xl:gap-6 lg:items-center">
                        <div className="col-span-12 lg:col-span-8">
                            <h4 className="text-18-sm">Tag the image below</h4>
                            <div>
                                <img className="w-full mt-4" src="Assets/Images/Rateimages/18 - Ripley.png" alt="" />
                            </div>
                        </div>
                        <form className="Form col-span-12 lg:col-span-4 lg:px-0 lg:bg-transparent lg:mt-7 mt-0">
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
                    </div>
                </div>
            </div>
            <Nav />
        </>

    );
};

export default TagImages;
