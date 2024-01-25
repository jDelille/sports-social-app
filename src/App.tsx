import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sportsbook from "./pages/Sportsbook";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sportsbook" element={<Layout><Sportsbook /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
