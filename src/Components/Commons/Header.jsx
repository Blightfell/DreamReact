import DowloadPWA from "../Ui-Components/DowloadPWA"
import UserProfile from "../Ui-Components/UserProfile"


const Header = (props) => {
    return (
        <div>
            <header className="header-mob lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] py-4 px-6 2xl:pt-8 2xl:pb-11 lg:pb-9">
                <div className="flex items-center justify-center lg:justify-between w-full">
                    <div>
                        <h5>{props.title}</h5>
                        {props.displayText ? <p className="lg:hidden">
                            More Ratings Unlock in 18h 37m
                        </p> : ''}
                    </div>
                    <div className="sm-hidden lg:block">
                        <div className="flex gap-5 2xl:gap-6">
                            {props.displayButton ? <DowloadPWA /> : ''}
                            <UserProfile />
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
