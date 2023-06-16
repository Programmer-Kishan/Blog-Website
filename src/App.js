import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Blogs from "./Components/Blogs/Blogs";
import Events from "./Components/Events/Events";
import Jobs from "./Components/Jobs/Jobs";
import News from "./Components/News/News";

import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
