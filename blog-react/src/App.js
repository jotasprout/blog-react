import Home from "./comps/Home";
import PortList from "./comps/portfolio/PortList";
import Blog from "./comps/Blog";
import Resume from "./comps/Resume";
import Header from "./comps/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";



function App() {
  return (
    <div className="App">

        <Router>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<PortList />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>                
        </Router>

    </div>
  );
}

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

export default App;
