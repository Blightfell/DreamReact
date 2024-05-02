
const CongurationPopup = () => {
    return (
        <div>
            <div className="popup-overlay"> {/* This provides the black transparent background */}
                <div className={`popupbagde px-4 py-2 lg:px-7 lg:py-7 2xl:px-8 2xl:py-8 show`}>
                    <div className='mx-auto flex items-center gap-2 justify-center'>
                        <div className='bg-[#0E6400] rounded-[50%] p-3'>
                            <img className='lg:h-9 2xl:h-10' src="Assets/Images/All Icons/Group 90.svg" alt="" />
                        </div>
                        <div>
                            <h3>Congratulations!</h3>
                            <p>You Earned 10 $Dream</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CongurationPopup
