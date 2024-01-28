import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Sportsbook from "./pages/Sportsbook";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Bookmarks from "./pages/Bookmarks";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import AuthRoute from "./components/AuthRoute";

import { CiHashtag, CiBellOn, CiBookmark, CiStar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GiSoccerField } from "react-icons/gi";

import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/"
            element={<Layout title="Home" icon={IoHomeOutline}> <Home /></Layout>}
          />
          <Route path="/explore"
            element={<AuthRoute><Layout title="Explore" icon={CiHashtag}><Explore /></Layout></AuthRoute>}
          />
          <Route path="/sportsbook"
            element={<AuthRoute><Layout title="Sportsbook" icon={GiSoccerField}><Sportsbook /></Layout></AuthRoute>}
          />
          <Route path="/notifications"
            element={<AuthRoute><Layout title="Notifications" icon={CiBellOn}><Notifications /></Layout></AuthRoute>}
          />
          <Route path="/bookmarks"
            element={<AuthRoute><Layout title="Bookmarks" icon={CiBookmark}><Bookmarks /></Layout></AuthRoute>}
          />
          <Route path="/favorites"
            element={<AuthRoute><Layout title="Favorites" icon={CiStar}> <Favorites /></Layout></AuthRoute>}
          />

        </Routes>
      </AuthProvider>

    </Router>
  )
}

export default App
