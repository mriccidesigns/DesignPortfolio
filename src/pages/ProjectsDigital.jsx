import CategoryPage from '../components/CategoryPage';
import { projects } from '../data/projects';

const ProjectsDigital = () => {
    const projectsDigital = projects.filter(project => project.category === 'digital');
    return <CategoryPage title="Digital Marketing Projects" projects={projectsDigital} />;
};

export default ProjectsDigital;
