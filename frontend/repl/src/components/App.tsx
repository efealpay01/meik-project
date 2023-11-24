import "../styles/App.css";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import LogInPage from "./Auth/LogIn";

const firebaseConfig = {
  apiKey: "AIzaSyDxt7oAN1TTXBK4P03xaywk3fW59Yt0VpE",
  authDomain: "meikdatabase.firebaseapp.com",
  projectId: "meikdatabase",
  storageBucket: "meikdatabase.appspot.com",
  messagingSenderId: "586307420979",
  appId: "1:586307420979:web:e83246de7e624e04bbb446",
  measurementId: "G-8JDMYG4ZG2",
};

initializeApp(firebaseConfig);

export interface IApplicationProps {}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
