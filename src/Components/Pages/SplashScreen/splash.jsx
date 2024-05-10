import { Button } from "@material-tailwind/react";
import "./splash.css";
import { Link } from "react-router-dom";
import DowloadPWA from "../../Ui-Components/DowloadPWA";
const splash = () => {
    return (
        <>
            <div className='SplashScreenBG bg1 bg2 bg3'>
                <div className="container mx-auto">
                    <div className="flex justify-center items-center md:justify-between">
                        <img className="logo pt-12 md:pt-0 lg:pt-2" src="Assets/Images/Logo/AEON PROTOCOL.svg" alt="" />
                        <div className="sm-hidden">
                            <DowloadPWA />
                        </div>
                    </div>
                    <div className="splash-mid-content">
                        <div>
                            <h1>WELCOME TO THE
                                AEON PROTOCOL</h1>
                            <p>Harness the power of AI to bring your visions to life with Aeon Protocol. Enter a world where artistry meets innovation, and every creation is a masterpiece waiting to happen. Log in to begin your artistic adventure.</p>
                            <div className="flex gap-6 justify-center sign-btn">
                                <Link to="/signIn">
                                    <Button className="mob-btn" variant="outlined">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button variant="outlined">Sign Up</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default splash
