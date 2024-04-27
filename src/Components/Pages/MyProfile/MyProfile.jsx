import { useState } from 'react';
import './MyProfile.css';
import Nav from "../../Commons/MobileNav/nav";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const [activeTab, setActiveTab] = useState(0); // State to track which tab is active

    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "100", text: "$Dream Earned" },
        { iconSrc: "Assets/Images/All Icons/Group 69.svg", value: "0", text: "Models Contributed To" },
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 70.svg", value: "3", text: "Nodes Owned" },
        { iconSrc: "Assets/Images/All Icons/Group 72.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 82.svg", value: "18h 37m", text: "More Ratings Unlock in" },
    ];

    // Handle tab change when a button is clicked
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className='mb-28'>
                <header className="header-mob bg-[#2C2E2E] h-14 py-4 px-6">
                    <h5>@TonyStark</h5>
                    <div className="float-right mt-[-23px] flex gap-4">
                        <div>
                            {/* <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" /> */}
                        </div>
                        <Link to="/">
                            <img src="Assets/Images/All Icons/Group 177.svg" alt="" />
                        </Link>
                    </div>
                </header>
                <div className="container mx-auto p-6">
                    <div className="MyProfile-content">
                        <div className="grid grid-cols-2 gap-4 desh-box ">
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
                        <h4 className="text-18-sm mt-10 mb-6">My Generations</h4>
                        <div className="tab-btn flex gap-2 mb-6">
                            {['Today', 'This Week', 'This Month'].map((name, index) => (
                                <Button
                                    key={index}
                                    className={`py-[6px] px-4 rounded-[20px] ${activeTab === index ? 'bg-white text-black' : 'bg-[#2C2E2E] text-white'
                                        }`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {name}
                                </Button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === 0 && <div>
                                <img src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                            </div>}
                            {activeTab === 1 && <div>
                                <img src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                            </div>
                            }
                            {activeTab === 2 && <div>
                                <img src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default MyProfile;
