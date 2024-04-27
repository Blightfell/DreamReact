import Splash from "../Pages/SplashScreen/splash";
import "./style.css";
const DropAnimationExample = () => {
    const imageSources = [
        {
            alt: "Image 2",
            src: "Assets/Images/BackgroundImages/Property 1=Frame6.png"
        },
        {
            alt: "Image 1",
            src: "Assets/Images/BackgroundImages/Property 1=Frame3.png"
        },
        {
            alt: "Image 2",
            src: "Assets/Images/BackgroundImages/Property 1=Frame6.png"
        },
        {
            alt: "Image 2",
            src: "Assets/Images/BackgroundImages/Property 1=Frame61.png"
        },
        {
            alt: "Image 2",
            src: "Assets/Images/BackgroundImages/Property 1=Frame2.png"
        }
    ];

    return (
        <div className="relative overflow-hidden h-screen">
            <div className="animation-container">
                {/* Drop Animation 1 */}
                <div className="drop-animation drop-1">
                    <div>
                        {/* Use map to render the images */}
                        {imageSources.map((img, index) => (
                            <img key={`drop-1-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>

                {/* Drop Animation 2 */}
                <div className="drop-animation drop-2">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-2-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>

                {/* Drop Animation 3 */}
                <div className="drop-animation drop-3">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="drop-animation sm-hidden drop-2">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="drop-animation sm-hidden drop-3">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="drop-animation sm-hidden md:hidden lg:block drop-2">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
                {/*  */}
                <div className="drop-animation sm-hidden md:hidden lg:block drop-3">
                    <div>
                        {imageSources.map((img, index) => (
                            <img key={`drop-3-${index}`} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
            </div>
            <Splash className="" />
        </div>
    );
};

export default DropAnimationExample;
