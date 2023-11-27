import './App.css';
import { useState, useEffect } from 'react';
import CursorAnimation from './components/cursor_animation/CursorAnimation'
import Courses from './components/courses/Courses';
import Companies from './components/companies/Companies';
import Hero from './components/herosection/Hero';
import Brain from './components/brain/Brain';
import { NavBar } from './components/NavBar';
import Achievement from './components/achievements/Achievement'
import Categories from './components/categories/Categories';
import Feedback from './components/feedback/Feedback';
import CTA from './components/CallToAction/CTA';
import Footer from './components/footer/Footer';
// import { useElementSize, useMouse } from '@mantine/hooks';
import { useMouse } from 'react-use';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/support/Support';
import JoinForm from './components/support/Support';
import { method } from 'lodash';
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from "@100mslive/react-sdk";
import Room from './components/support/Room';
import { SignUp } from './components/signin/SignUp';
import SignIn from './components/signin/SignIn';


const endPoint = "https://prod-in2.100ms.live/hmsapi/hemanth-videoconf-003.app.100ms.live/";

const getToken = async (user_id) => {
  const response = await fetch(`${endPoint}api/token`,
    {
      method: "POST",
      body: JSON.stringify({
        user_id,
        role: "host",
        type: "app",
        room_id: "6560ecec3bc2e1189563106f"
      })
    });
    const {token} = await response.json();
    return token;
};




function App() {

  // const [scaling, setscaling] = useState(false);
  // const [color, setColor] = useState('white');
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom); 
  const handleSubmit = async (userName) => {
    const token = await getToken(userName);
    hmsActions.join({authToken: token, userName});
  };

  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleSignIn = () => {
    setLoggedIn(true);
  };
  return (
    <div className="App"
    >
      {/* <CursorAnimation scaling={scaling} color={color} /> */}
      {/* <CursorAnimation scaling={scaling} color={color} /> */}
      {/* <CursorAnimation/> */}

      {/* <button
          onMouseEnter={() => setscaling(true)}
          onMouseLeave={() => setscaling(false)}>
          read more
        </button> */}

      <Router>
        <Routes>
          <Route path='/register' element={<SignUp/> }/>
          <Route path='/login' element={<SignIn onSignIn={handleSignIn}/> }/>
          <Route path="/" element={isLoggedIn?<Home />:<SignUp/> } />
          {/* <Route path="/support" element={<Support />} /> */}
          {/* <Route path="/support" element={isConnected?<Room/> :<Support handleSubmit={handleSubmit} />} /> */}
        </Routes>
      </Router>
    </div>
    // docs.100ms.live/v2/web-frameworks/Getting-started-react
  );
}

export default App;
