import "./deshboard.css";
import Nav from "../../Commons/MobileNav/nav";
import Chart from "../../Ui-Components/Chart";
const Deshboard = () => {
    // Define an array of box data
    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 146.svg", value: "88.3%", text: "Availability (Last Hours)" },
        { iconSrc: "Assets/Images/All Icons/Group 147.svg", value: "823", text: "Total Image Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 148.svg", value: "0", text: "Total Text Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 150.svg", value: "--", text: "Performance Score" },
        { iconSrc: "Assets/Images/All Icons/Group 149.svg", value: "823", text: "1 Day Image Requests" },
        { iconSrc: "Assets/Images/All Icons/Group 151.svg", value: "0", text: "1 Day Text Requests" },
    ];
    const detailBoxes = [
        [
            { label: "Time", value: "1 min ago" },
            { label: "Model ID", value: "BlazingDrive" },
            { label: "Total Latency", value: "3.965" },
            { label: "Inference Latency", value: "3.965567" },
        ],
        [
            { label: "Time", value: "5 mins ago" },
            { label: "Model ID", value: "Speedster" },
            { label: "Total Latency", value: "2.334" },
            { label: "Inference Latency", value: "2.234567" },
        ],
        [
            { label: "Time", value: "10 mins ago" },
            { label: "Model ID", value: "TurboBoost" },
            { label: "Total Latency", value: "1.987" },
            { label: "Inference Latency", value: "1.567891" },
        ],
        [
            { label: "Time", value: "20 mins ago" },
            { label: "Model ID", value: "HyperDrive" },
            { label: "Total Latency", value: "4.123" },
            { label: "Inference Latency", value: "4.567890" },
        ],
    ];
    return (
        <>
            <div className='mb-28'>
                <header className="header-mob bg-[#2C2E2E] h-14 py-4 px-6">
                    <h5>Dashboard</h5>
                    <div className="float-right mt-[-23px]">
                        {/* <img src="Assets/Images/All Icons/Group 85.svg" alt="" /> */}
                    </div>
                </header>
                <div className="container mx-auto">
                    <div className="deshboard-content p-6">
                        <div className="grid grid-cols-2 gap-4 desh-box">
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
                        <div className="chart-box rounded-lg bg-[#2C2E2E] mt-4 mb-8">
                            <div className="border-[#414545] border-b p-4">
                                <h4 className="text-18-sm">
                                    Daily Points
                                </h4>
                            </div>
                            <div className="chart px-1 pb-4">
                                <Chart />
                            </div>
                        </div>
                        <h4 className="text-18-sm">
                            Request History
                        </h4>
                        <div className="detail-box-container">
                            {detailBoxes.map((details, index) => (
                                <div key={index} className="detail-box p-4 bg-[#2C2E2E] rounded-lg grid grid-cols-2 gap-4 my-4">
                                    {details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="detail-item">
                                            <h5>{detail.label}</h5>
                                            <p>{detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default Deshboard;
