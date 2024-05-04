
import { useState, useEffect } from 'react';
import "./LoginForm.css";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LogoIcon from '../Ui-Components/LogoIcon';
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!email || !password) {
      setError(true); // Set error to true if email or password is empty
      alert('Please enter both email and password');
      return;
    }
  };

  const isMobile = useIsMobile();

  const mobileLink = "/Deshboard"; // Link for mobile
  const desktopLink = "/explore"; // Link for desktop

  const link = isMobile ? mobileLink : desktopLink;

  return (
    <section className="SignIn">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-6 xl:col-span-8">
            <div className="flex flex-col justify-between h-full">
              <div className='sm-hidden md:block lg:block mt-2 2xl:mt-3'>
                <LogoIcon />
              </div>
              <div className="title-form sm-hidden md:hidden lg:block xl:block">
                <h3 className="font-black-48">Imagination Unbound</h3>
                <p className="form-para">
                  Aeon Protocol invites you to defy the ordinary. Experience the alchemy of art and AI as you convert thoughts into breathtaking imagery. Your canvas awaits beyond this gateway.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-6 xl:col-span-4">
            <form className="Form">
              <h2>Welcome Back!</h2>
              <p className="form-para fp1">Login to your account</p>
              <input className={`focus:ring-blue-500 input-custom ${error && (!email || !password) ? 'border-red-500' : ''}`} type="email" placeholder="Email/Username" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className={`focus:ring-blue-500 input-custom ${error && (!email || !password) ? 'border-red-500' : ''}`} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className="flex justify-between w-full mb-8 md:mb-4 lg:mb-5 xl:mb-11">
                <div className="checkbox-div">
                  <Checkbox style={{ padding: "0" }} className="h-5 w-5" label="Remember Me" />
                </div>
                <div>
                  <Link to="/ForgetPassword">
                    <Button className="forget-btn sm-font-16 p-0" variant="text">
                      Forgot Password?
                    </Button>
                  </Link>
                </div>
              </div>
              <Button className="sub-button" onClick={handleLogin}>
                Login
              </Button>
              <div className="horizontal-dir my-6 md:my-5 xl:my-12 lg:my-3 flex justify-center items-center">
                <hr />
                <p className='sm-font-16'>Or Login With</p>
                <hr />
              </div>
              <Link to={link}>
                <Button className="sub-button flex gap-4 justify-center items-center mb-4">
                  <img src="Assets/Images/All Icons/Group 2.svg" alt="" />
                  {isMobile ? "Google" : "Google"}
                </Button>
              </Link>
              <Link to={link}>
                <Button style={{ color: "white", background: "black" }} className="sub-button flex gap-4 justify-center items-center">
                  <img src="Assets/Images/All Icons/Group 4.svg" alt="" />
                  Connect Wallet
                </Button>
              </Link>
              <div className="mt-12 md:mt-9 xl:mt-12 lg:mt-4">
                <p className="para-18-500  text-center">Don’t have an account? <span className="font-bold duration-300 hover:text-gray-200 cursor-pointer">
                  <Link to="/signup">Sign up</Link>
                </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn