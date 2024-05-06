import './App.css'
import PagesRoutes from './Components/PagesRoutes'
import { BrowserRouter as Router } from 'react-router-dom';

// import { useEffect, useState } from 'react';
// import ScreenPagesRoutes from './Components/ScreenPagesRoutes'
const App = () => {
  // const [installPromptEvent, setInstallPromptEvent] = useState(null);

  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (e) => {
  //     console.log("sdsds")
  //     // Prevent the default behavior
  //     e.preventDefault();

  //     // Store the event so it can be used later
  //     setInstallPromptEvent(e);
  //   };

  //   // Listen for the beforeinstallprompt event
  //   window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  //   // Cleanup the event listener when the component is unmounted
  //   // return () => {
  //   //   window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  //   // };
  // }, []);

  // const handleInstallPWA = async () => {
  //   if (installPromptEvent) {
  //     // Show the install prompt
  //     installPromptEvent.prompt();

  //     const { outcome } = await installPromptEvent.userChoice;

  //     if (outcome === 'accepted') {
  //       console.log('User accepted the install prompt');
  //     } else {
  //       console.log('User dismissed the install prompt');
  //     }

  //     // Clear the stored event
  //     setInstallPromptEvent(null);
  //   }
  // };

  return (
    <div>
     
      <Router>
        <PagesRoutes />
      </Router>

    </div>
  )
}

export default App
