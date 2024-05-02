import { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./explore.css";
import { BsThreeDotsVertical } from 'react-icons/bs';
import BreadCrum from './BreadCrum';
import SideBAr from '../../Commons/SideBar/SideBar';

const Explore = () => {
    const posts = [
        {
            id: 1,
            image: "Assets/Images/Explore/4 - Dream Totem.png",
            authorImage: "Assets/Images/Explore/Ellipse 3.png",
            authorName: "Tony Stark",
            timeAgo: "1 hour ago",
            rating: "8/10",
        },
        {
            id: 2,
            image: "Assets/Images/Explore/48%20-%20Star%20Ram.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        {
            id: 3,
            image: "Assets/Images/Explore/46%20-%20Chapoya.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        {
            id: 4,
            image: "Assets/Images/Explore/42-Borum,The-Bloodsworn.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        {
            id: 5,
            image: "Assets/Images/Explore/37%20-%20Jin%20and%20Jang.png",
            authorImage: "Assets/Images/Explore/Ellipse 3.png",
            authorName: "Tony Stark",
            timeAgo: "1 hour ago",
            rating: "8/10",
        },
        {
            id: 6,
            image: "Assets/Images/Explore/39%20-%20Skull%20Crab.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        {
            id: 7,
            image: "Assets/Images/Explore/36%20-%20Jhakri.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        {
            id: 8,
            image: "Assets/Images/Explore/34---Little-Aupa.png",
            authorImage: "Assets/Images/Explore/Ellipse 4.png",
            authorName: "Bruce Wayne",
            timeAgo: "2 hours ago",
            rating: "9/10",
        },
        // Add more posts as needed
    ];
    const [activeTab, setActiveTab] = useState("tab1"); // Default tab

    return (
        <div className="flex justify-between">
            <div className="md:w-0 2xl:w-[22%] md:w-[19%]">
                <SideBAr />
            </div>
            <div className=" md:w-full lg:w-[81%] 2xl:w-[78%]  bg-[#3B3F3F] h-full sm-w-full">
                <BreadCrum />
                <div className="container mx-auto p-6 md:px-16 2xl:px-[100px]">
                    <div className="generate-tab">
                        {/* Tab Buttons */}
                        <div className="flex generate-tab-btn justify-center my-6 border-b border-[#D2D2D2] md:w-[280px] 2xl:w-[360px]  mx-auto "> {/* Center the tabs */}
                            <Button
                                onClick={() => setActiveTab("tab1")}
                                className={`${activeTab === "tab1" ? "active-btn-generate" : "shadow-none"}`}
                            >
                                Explore
                            </Button>
                            <Button
                                onClick={() => setActiveTab("tab2")}
                                className={`${activeTab === "tab2" ? "active-btn-generate" : "shadow-none"}`}
                            >
                                Top Rated
                            </Button>
                        </div>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {activeTab === "tab1" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 2xl:gap-6"> {/* Responsive grid layout */}
                                    {posts.map((post) => (
                                        <div key={post.id} className="generate-box h-auto"> {/* Flexibility with height */}
                                            <img className="w-full h-auto" src={post.image} alt={post.authorName} /> {/* Ensures proper scaling */}
                                            <div className="mt-3 2xl:mt-4">
                                                <div className="flex justify-between">
                                                    <div className="flex gap-3 2xl:gap-4 items-center">
                                                        <img className="h-8 w-8 rounded-full" src={post.authorImage} alt={post.authorName} />
                                                        <div>
                                                            <h5>{post.authorName}</h5>
                                                            <p>{post.timeAgo}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 2xl:gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <h6>{post.rating}</h6>
                                                            <img src="Assets/Images/All Icons/Group 40.svg" alt="Rating Icon" />
                                                        </div>
                                                        <BsThreeDotsVertical className="text-white cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            )}
                            {activeTab === "tab2" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 2xl:gap-6"> {/* Responsive grid layout */}
                                    {posts.map((post) => (
                                        <div key={post.id} className="generate-box h-auto"> {/* Flexibility with height */}
                                            <img className="w-full h-auto" src={post.image} alt={post.authorName} /> {/* Ensures proper scaling */}
                                            <div className="mt-3 2xl:mt-4">
                                                <div className="flex justify-between">
                                                    <div className="flex gap-3 2xl:gap-4 items-center">
                                                        <img className="h-8 w-8 rounded-full" src={post.authorImage} alt={post.authorName} />
                                                        <div>
                                                            <h5>{post.authorName}</h5>
                                                            <p>{post.timeAgo}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 2xl:gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <h6>{post.rating}</h6>
                                                            <img src="Assets/Images/All Icons/Group 40.svg" alt="Rating Icon" />
                                                        </div>
                                                        <BsThreeDotsVertical className="text-white cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Explore;
