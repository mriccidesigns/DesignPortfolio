import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects3D from './pages/Projects3D';
import ProjectsPackaging from './pages/ProjectsPackaging';
import ProjectsDigital from './pages/ProjectsDigital';
import ProjectDetail from './pages/ProjectDetail';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router basename="/DesignPortfolio/">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="3d-projects" element={<Projects3D />} />
                    <Route path="packaging" element={<ProjectsPackaging />} />
                    <Route path="digital-marketing" element={<ProjectsDigital />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
