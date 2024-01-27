import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Sportsbook from "./pages/Sportsbook";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Bookmarks from "./pages/Bookmarks";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import AuthRoute from "./components/AuthRoute";

import { FaHashtag, FaBell, FaBookmark, FaStar, FaHome } from "react-icons/fa";
import { TbSoccerField } from "react-icons/tb";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<Layout title="Home" icon={FaHome}> <Home /></Layout>}
        />
        <Route path="/explore"
          element={<AuthRoute><Layout title="Explore" icon={FaHashtag}><Explore /></Layout></AuthRoute>}
        />
        <Route path="/sportsbook"
          element={<AuthRoute><Layout title="Sportsbook" icon={TbSoccerField}><Sportsbook /></Layout></AuthRoute>}
        />
        <Route path="/notifications"
          element={<AuthRoute><Layout title="Notifications" icon={FaBell}><Notifications /></Layout></AuthRoute>}
        />
        <Route path="/bookmarks"
          element={<AuthRoute><Layout title="Bookmarks" icon={FaBookmark}><Bookmarks /></Layout></AuthRoute>}
        />
        <Route path="/favorites"
          element={<AuthRoute><Layout title="Favorites" icon={FaStar}> <Favorites /></Layout></AuthRoute>}
        />

      </Routes>
    </Router>
  )
}

export default App
