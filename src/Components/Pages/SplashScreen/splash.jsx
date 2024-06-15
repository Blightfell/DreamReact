import { useEffect, useState } from 'react';
import { Button as MTButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DowloadPWA from '../../Ui-Components/DowloadPWA';
import "./splash.css";

const Splash = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertClass, setAlertClass] = useState('');

    useEffect(() => {
        setShowAlert(true);
        setAlertClass('alert-slide-in'); // Start slide-in animation

        const timeout = setTimeout(() => {
            setAlertClass('alert-slide-out'); // Start slide-out animation
        }, 4500); // Change class after 4 seconds

        const clearTimeoutId = setTimeout(() => {
            setShowAlert(false); // Hide alert after animation completes
        }, 5000); // Total duration includes animation time

        return () => {
            clearTimeout(timeout);
            clearTimeout(clearTimeoutId);
        };
    }, []);

    return (
        <>
         <style>
    {`
    @keyframes slideIn {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }
    }

    .alert-slide-in {
        animation: slideIn 0.5s forwards;
    }

    .alert-slide-out {
        animation: slideOut 0.5s forwards;
    }

    .custom-alert {
        background-color: #2C2E2E; /* Custom background color */
        color: white; /* Custom text color */
        border-radius: 0.5rem; /* Custom border radius */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Custom shadow */
        font-size: 1rem; /* Font size */
        position: fixed; /* Fixed positioning */
        top: 2%; /* Position at vertical center */
        left: 50%; /* Position at horizontal center */
        transform: translate(-50%, -50%); /* Centering trick */
        z-index: 1000; /* Ensure it's above other content */
        // width: 80%; /* Adjust width as needed */
        // max-width: 400px; /* Set max-width for responsiveness */
    }

    .custom-alert-title {
        font-weight: bold; /* Bold title */
    }
    `}
</style>

            <div className='SplashScreenBG bg1 bg2 bg3'>
                {showAlert && (
                    <div >
                        <Alert
                            className={`custom-alert ${alertClass}`}
                            icon={false} // Remove the default icon
                        >
                            <AlertTitle className='flex gap-1 items-center custom-alert-title'>
                                Download The Dream Protocol App
                                <DowloadPWA />
                            </AlertTitle>
                        </Alert>

                    </div>
                )}
                <div className="container mx-auto">
                    <div className="flex justify-center items-center md:justify-between">
                        <img className="logo pt-12 md:pt-0 lg:pt-2" src="Assets/Images/Logo/AEON PROTOCOL.svg" alt="AEON PROTOCOL Logo" />
                    </div>
                    <div className="splash-mid-content">
                        <div>
                            <h1>WELCOME TO THE Dream PROTOCOL</h1>
                            <p>Harness the power of AI to bring your visions to life with Dream Protocol. Enter a world where artistry meets innovation, and every creation is a masterpiece waiting to happen. Log in to begin your artistic adventure.</p>
                            <div className="flex gap-6 justify-center sign-btn">
                                <Link to="/signIn">
                                    <MTButton className="mob-btn" variant="outlined">Login</MTButton>
                                </Link>
                                <Link to="/signup">
                                    <MTButton variant="outlined">Sign Up</MTButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Splash;
