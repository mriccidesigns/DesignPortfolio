import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import styles from './Home.module.css';
import { projects } from '../data/projects';

const Home = () => {
    const digitalProjects = projects.filter(p => p.category === 'digital');
    const packagingProjects = projects.filter(p => p.category === 'packaging');
    const threeDProjects = projects.filter(p => p.category === '3d');

    return (
        <div className={styles.home}>
            <Hero />

            {/* Projects Showcase with Alternating Layout */}
            {/* Projects Showcase with Categorized Sections */}
            <section className={styles.projectsShowcase}>
                {/* 3D Section */}
                <div id="3d-section" className={styles.categoryDivider}>
                    <h2>3D Visualization</h2>
                </div>
                {threeDProjects.map((project, index) => (
                    <div key={project.id} className={`${styles.projectRow} ${index % 2 !== 0 ? styles.reversed : ''}`}>
                        <div className={styles.projectImageWrapper}>
                            <span className={styles.categoryTag}>3D</span>
                            {project.previewVideo || project.video ? (
                                <video
                                    src={project.previewVideo || project.video}
                                    className={styles.projectImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            )}
                        </div>
                        <div className={styles.projectInfo}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <Link to={`/project/${project.id}`} className={styles.viewProjectBtn}>
                                View Project &rarr;
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Packaging Section */}
                <div id="packaging-section" className={styles.categoryDivider}>
                    <h2>Packaging Design</h2>
                </div>
                {packagingProjects.map((project, index) => (
                    <div key={project.id} className={`${styles.projectRow} ${index % 2 === 0 ? styles.reversed : ''}`}>
                        <div className={styles.projectImageWrapper}>
                            <span className={styles.categoryTag}>PACKAGING</span>
                            {project.previewVideo || project.video ? (
                                <video
                                    src={project.previewVideo || project.video}
                                    className={styles.projectImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            )}
                        </div>
                        <div className={styles.projectInfo}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <Link to={`/project/${project.id}`} className={styles.viewProjectBtn}>
                                View Project &rarr;
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Digital Section */}
                <div id="digital-section" className={styles.categoryDivider}>
                    <h2>Digital Marketing</h2>
                </div>
                {digitalProjects.map((project, index) => (
                    <div key={project.id} className={`${styles.projectRow} ${index % 2 !== 0 ? styles.reversed : ''}`}>
                        <div className={styles.projectImageWrapper}>
                            <span className={styles.categoryTag}>DIGITAL</span>
                            {project.previewVideo || project.video ? (
                                <video
                                    src={project.previewVideo || project.video}
                                    className={styles.projectImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            )}
                        </div>
                        <div className={styles.projectInfo}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <Link to={`/project/${project.id}`} className={styles.viewProjectBtn}>
                                View Project &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
