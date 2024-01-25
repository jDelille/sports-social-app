import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sportsbook from "./pages/Sportsbook";

import { initializeApp } from 'firebase/app'
import { config } from "./firebase/config";
import Test from "./pages/Test";
import AuthRoute from "./components/AuthRoute";

initializeApp(config.firebaseConfig)

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sportsbook" element={<AuthRoute><Layout><Sportsbook /></Layout></AuthRoute>} />
        <Route path="/test" element={<Layout><Test /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
