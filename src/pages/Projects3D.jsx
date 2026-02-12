import CategoryPage from '../components/CategoryPage';
import { projects } from '../data/projects';

const Projects3D = () => {
    const projects3D = projects.filter(project => project.category === '3d');
    return <CategoryPage title="3D Projects" projects={projects3D} />;
};

export default Projects3D;
