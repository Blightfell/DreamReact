import { useState } from 'react';
import './TagImages.css';
import Nav from "../../Commons/MobileNav/nav";

import { Button } from '@material-tailwind/react';

const TagImages = () => {
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
                <header className="header-mob bg-[#2C2E2E] h-14 py-4 px-6">
                    <h5>Images Tagged: 15</h5>
                    <div className="float-right mt-[-23px]">
                        {/* <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" /> */}
                    </div>
                </header>
                <div className="container mx-auto p-6">
                    <div className="TagImages-content">
                        <h4 className="text-18-sm">Tag the image below</h4>
                        <div>
                            <img className="w-full mt-4 mb-6" src="Assets/Images/Rateimages/Component 22.png" alt="" />
                        </div>
                        <p>Write 5 words you associate with this image. All lowercase, no symbols or spaces.</p>
                        <form className="Form">
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
