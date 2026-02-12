import CategoryPage from '../components/CategoryPage';
import { projects } from '../data/projects';

const ProjectsPackaging = () => {
    const projectsPackaging = projects.filter(project => project.category === 'packaging');
    return <CategoryPage title="Packaging Projects" projects={projectsPackaging} />;
};

export default ProjectsPackaging;
