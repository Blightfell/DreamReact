import { Button } from "@material-tailwind/react"

const DowloadPWA = () => {
    return (
        <div>
            <a href="/dist">
                <Button className='pwa-download'><img src="Assets/Images/All Icons/Group 115.svg" alt="" /> Download App</Button>
            </a>
        </div>
    )
}

export default DowloadPWA
