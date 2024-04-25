
import './App.css'
import ResetPassword from './Components/LoginForm/ResetPassword';
import ForgetPassword from './Components/LoginForm/forgetpswd';
import Otp from './Components/LoginForm/Otp';
import SignIn from './Components/LoginForm/SignIn';
import SignUp from './Components/LoginForm/SignUp';
import Deshboard from './Components/Pages/Deshboard/deshboard';
import RateImages from './Components/Pages/RateImages/RateImages';
import TagImages from './Components/Pages/TagImages/TagImages';
import MyProfile from './Components/Pages/MyProfile/MyProfile';
import SplashScreen from './Components/Ui-Components/DropAnimation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={< SplashScreen />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Deshboard" element={<Deshboard />} />
          <Route path="/RateImages" element={<RateImages />} />
          <Route path="/TagImages" element={<TagImages />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
