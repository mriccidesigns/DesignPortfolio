import ProjectCard from './ProjectCard';
import styles from './CategoryPage.module.css';

const CategoryPage = ({ title, projects }) => {
    return (
        <div className={styles.categoryPage}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} {...project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
