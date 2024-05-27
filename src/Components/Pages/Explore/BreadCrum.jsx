import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Header from "../../Commons/Header";
import "./explore.css";
import { FaAngleDown } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";

const BreadCrum = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedModel, setSelectedModel] = useState("Select Model");
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (model) => {
        setSelectedModel(model);
        handleClose();
    };
    return (
        <>
            <Header title={'Welcome Back! Adam.'} displayButton={false} />
            <div className="lg:px-16 2xl:px-[100px] md:pb-4 px-6">
                <form className="bg-[#2C2E2E] generate-form h-12 lg:h-16 2xl:h-20 shadow-2xl rounded-[40px] w-full flex items-center justify-between gap-4 lg:ps-6 lg:pr-4 py-4 px-3">
                    <div className="flex items-center gap-3 md:gap-5 2xl:gap-6 w-full lg:w-1/2 2xl:w-5/6 ">
                        <label htmlFor="">
                            <img src="Assets/Images/All%20Icons/Group%2013.svg" alt="" />
                        </label>
                        <input
                            className="w-full mobile-placeholder"
                            placeholder="Describe what you want to see here"
                            type="text"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <Button className="menu-btn" onClick={handleClick}>
                            {selectedModel}
                            <span className={`icon ${open ? "rotate" : ""}`}>
                                <FaAngleDown />
                            </span>
                        </Button>
                        <Link to="/Generate">
                            <Button>Generate</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    sx: {
                        mt: 1.6, // 1.5 * 8px = 12px (MUI spacing unit)
                        border: '1px solid #2C2E2E',
                    }
                }}
            >
                <MenuItem disabled>
                    <Typography sx={{ color: '#2C2E2E' }}>Select Model</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick("Playground v2.5")}
                >
                    Playground v2.5
                    <FiAlertCircle />
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick("Stable Diffusion XL 1.0")}
                >
                    Stable Diffusion XL 1.0
                    <FiAlertCircle />
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick("Segmind Stable Diffusion 1B")}
                >
                    Segmind Stable Diffusion 1B
                    <FiAlertCircle />
                </MenuItem>
            </Menu>
        </>
    )
}

export default BreadCrum;
