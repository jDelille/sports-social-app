import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Sportsbook from "./pages/Sportsbook";
import AuthRoute from "./components/AuthRoute";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Bookmarks from "./pages/Bookmarks";
import Favorites from "./pages/Favorites";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<AuthRoute><Layout><Explore /></Layout></AuthRoute>} />
        <Route path="/sportsbook" element={<AuthRoute><Layout><Sportsbook /></Layout></AuthRoute>} />
        <Route path="/notifications" element={<AuthRoute><Layout><Notifications /></Layout></AuthRoute>} />
        <Route path="/bookmarks" element={<AuthRoute><Layout><Bookmarks /></Layout></AuthRoute>} />
        <Route path="/favorites" element={<AuthRoute><Layout><Favorites /></Layout></AuthRoute>} />

      </Routes>
    </Router>
  )
}

export default App
