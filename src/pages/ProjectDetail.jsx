import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import styles from './ProjectDetail.module.css';
import Carousel from '../components/Carousel';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project Not Found</h2>
                <Link to="/" className={styles.backBtn}>Back to Home</Link>
            </div>
        );
    }

    return (
        <div className={styles.detailPage}>
            <div className={styles.container}>
                <Link to="/" className={styles.backLink}>&larr; Back to Projects</Link>

                <header className={styles.header}>
                    <h1 className={styles.title}>{project.title}</h1>
                </header>

                <div className={styles.heroSection}>
                    <div className={styles.heroImageWrapper}>
                        {project.mainVideo ? (
                            <video
                                src={project.mainVideo}
                                className={styles.heroImage} // Reuse heroImage class for sizing
                                autoPlay
                                muted
                                loop
                                playsInline
                            // controls
                            />
                        ) : (
                            <img src={project.image} alt={project.title} className={styles.heroImage} />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.fullWidthSection}>
                <div className={styles.centeredWrapper}>
                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>01</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>The Project</h3>
                                <p>{project.projectDetails}</p>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>02</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>The Goals</h3>
                                <p>{project.goals}</p>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>03</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>My Role</h3>
                                <p>{project.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.contentGrid}>
                    {/* Main Video Section (if not used as hero) */}
                    {project.video && !project.mainVideo && (
                        <div className={styles.videoSection}>
                            <h3 className={styles.videoTitle}>{project.videoTitle || "3D Animation"}</h3>
                            <div className={styles.videoWrapper}>
                                <video
                                    src={project.video}
                                    className={styles.mainVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            </div>
                        </div>
                    )}

                    {/* Secondary Video Section (if mainVideo is used, but we want another video section? Or if video property exists) */}
                    {/* The user wants the video to be top MAIN image. So we use mainVideo. */}
                    {/* If we have mainVideo, we might NOT want to show it again here unless it's a different video. */}
                    {/* Let's assume if mainVideo is set, project.video might be the SAME or different. */}
                    {/* User said "move the motion study to the top". So we move it. */}
                    {/* So we should NOT render it down here if it's the same video. */}

                    {/* If project.video exists AND it's not the same as mainVideo (or logic to hide it) */}
                    {/* For Soft Spa, we will put the video in mainVideo and maybe remove it from 'video' property or keep it? */}
                    {/* Let's allow for a secondary video if needed, but for Soft Spa we'll probably just use mainVideo. */}

                    {project.video && project.mainVideo && project.video !== project.mainVideo && (
                        <div className={styles.videoSection}>
                            <h3 className={styles.videoTitle}>{project.videoTitle || "3D Animation"}</h3>
                            <div className={styles.videoWrapper}>
                                <video
                                    src={project.video}
                                    className={styles.mainVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            </div>
                        </div>
                    )}

                    {/* Gallery Section */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className={styles.gallery}>
                            <div className={styles.galleryColumn}>
                                {project.gallery.map((item, index) => ({ item, index }))
                                    .filter(({ index }) => index % 2 === 0)
                                    .map(({ item, index }) => (
                                        <div key={index} style={{ order: index }} className={styles.galleryWrapper}>
                                            {Array.isArray(item) ? (
                                                <div className={styles.galleryCarousel}>
                                                    <div className={styles.carouselContainer}>
                                                        <Carousel item={item} projectTitle={project.title} index={index} />
                                                    </div>
                                                </div>
                                            ) : (typeof item === 'object' && item.src) ? (
                                                <div className={`${styles.galleryItem} ${item.style === 'cropped' ? styles.cropped : ''}`}>
                                                    <img src={item.src} alt={`${project.title} detail ${index + 1}`} />
                                                </div>
                                            ) : (
                                                <div className={styles.galleryItem}>
                                                    <img src={item} alt={`${project.title} detail ${index + 1}`} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            <div className={styles.galleryColumn}>
                                {project.gallery.map((item, index) => ({ item, index }))
                                    .filter(({ index }) => index % 2 !== 0)
                                    .map(({ item, index }) => (
                                        <div key={index} style={{ order: index }} className={styles.galleryWrapper}>
                                            {Array.isArray(item) ? (
                                                <div className={styles.galleryCarousel}>
                                                    <div className={styles.carouselContainer}>
                                                        <Carousel item={item} projectTitle={project.title} index={index} />
                                                    </div>
                                                </div>
                                            ) : (typeof item === 'object' && item.src) ? (
                                                <div className={`${styles.galleryItem} ${item.style === 'cropped' ? styles.cropped : ''}`}>
                                                    <img src={item.src} alt={`${project.title} detail ${index + 1}`} />
                                                </div>
                                            ) : (
                                                <div className={styles.galleryItem}>
                                                    <img src={item} alt={`${project.title} detail ${index + 1}`} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
