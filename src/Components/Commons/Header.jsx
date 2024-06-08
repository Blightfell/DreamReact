import { Link } from "react-router-dom"
import DowloadPWA from "../Ui-Components/DowloadPWA"
import UserProfile from "../Ui-Components/UserProfile"


const Header = (props) => {
    return (
        <div>
            <header className="header-mob md:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] py-4 px-6 2xl:pt-8 2xl:pb-11 lg:pb-9 md:mb-6 lg:mb-0 2xl:mb-0 relative">
                <div className="flex items-center justify-center md:justify-between w-full">
                    <div>
                        <h5>{props.title}</h5>
                        {props.displayText ? <p className="lg:hidden">
                            More Ratings Unlock in 18h 37m
                        </p> : ''}
                    </div>
                    <div className="sm-hidden lg:block">
                        <div className="flex gap-5 2xl:gap-6">
                            {props.displayButton ? <DowloadPWA /> : ''}
                            {/* {props.UserProfile ? <UserProfile /> : ''} */}
                            <UserProfile />
                        </div>
                    </div>
                    <Link to='/myprofile'>
                        <img className="h-6 md:hidden absolute right-4 top-[14px]" src="Assets/Images/Navbar/Ellipse 2.png" alt="" />
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default Header
