import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { GithubProvider } from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/AlertContext"
import GithubUser from "./pages/GithubUser";
import GithubSearch from './pages/GithubSearch';
import LeetcodeSearch from "./pages/LeetcodeSearch";
import { LeetcodeProvider } from "./context/leetcode/LeetcodeContext";

function App() {
  return (
    <GithubProvider>
      <LeetcodeProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Alert/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/github/search" element={<GithubSearch />} />
                  <Route path="/leetcode/search" element={<LeetcodeSearch/>}/>
                  <Route path="/github/user/:login" element={<GithubUser/>}/>
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound/>}/>
                </Routes>
              </main>
              <Footer/>
            </div>
          </Router>
        </AlertProvider>
      </LeetcodeProvider>
    </GithubProvider>
  );
}

export default App;
