import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import styles from './ProjectDetail.module.css';
import Carousel from '../components/Carousel';
import ScrollPeel from '../components/ScrollPeel';

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
        <div className={styles.detailPage} style={{ paddingBottom: 0, marginBottom: 'calc(-1 * var(--spacing-section))' }}>
            <div className={styles.container}>
                <Link to="/" className={styles.backLink}>
                    &larr; Back to Projects
                </Link>

                <header className={styles.header}>
                    <h1 className={styles.title}>{project.title}</h1>
                </header>

                <div className={styles.heroSection}>
                    <div className={styles.heroImageWrapper}>
                        {project.heroVideo ? (
                            <video src={project.heroVideo} autoPlay muted loop playsInline className={styles.heroImage} />
                        ) : Array.isArray(project.heroImage) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', gap: 'var(--spacing-xs)' }}>
                                {project.heroImage.map((img, idx) => (
                                    <img key={idx} src={img} alt={`${project.title} Hero ${idx + 1}`} style={{ flex: 1, objectFit: 'cover', minWidth: 0, height: '100%' }} />
                                ))}
                            </div>
                        ) : (
                            <img
                                src={project.heroImage || project.image}
                                alt={`${project.title} Hero`}
                                className={styles.heroImage}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div
                className={styles.fullWidthSection}
                style={project.sections && project.sections.length > 0 && project.sections[0].title === 'Design Process' ? { marginBottom: 0 } : {}}
            >
                <div className={styles.centeredWrapper}>
                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>01</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>The Project</h3>
                                {project.projectDetails.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>02</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>The Goals</h3>
                                {project.goals.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionNumber}>03</h2>
                            <div className={styles.sectionText}>
                                <h3 className={styles.sectionTitle}>My Role</h3>
                                {project.role.includes('\n\n') ? (
                                    <div className={styles.roleList}>
                                        {project.role.split('\n\n').map((item, i) => (
                                            <span key={i} className={styles.roleItem}>{item}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{project.role}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Narrative Sections: text + hero image, then bento grid */}
            {project.sections && project.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    {/* Text + Hero Image side by side */}
                    <div className={section.title === 'Design Process' ? styles.designProcessFullWidth : section.bgClassName ? styles[section.bgClassName] : ''}>
                        <div
                            className={styles.narrativeSection}
                            style={section.title === 'Design Process' ? { marginBottom: 0, paddingBottom: 'var(--spacing-xl)' } : {}}
                        >
                            {/* Determine if this section has any right-side media */}
                            {(() => {
                                const hasMedia = (section.scrollImages && section.scrollImages.length > 0) || section.linkPreview || section.heroVideo || section.heroImage;

                                return (
                                    <div className={`${styles.narrativeInner} ${sectionIndex % 2 !== 0 ? styles.narrativeReversed : ''}`}>
                                        <div className={hasMedia ? styles.narrativeText : styles.narrativeTextFull}>
                                            <h3 className={styles.narrativeTitle}>{section.title}</h3>
                                            {section.description && section.description.split('\n\n').map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                        {hasMedia && (
                                            <div className={styles.narrativeHeroImage}>
                                                {section.scrollImages && section.scrollImages.length > 0 ? (
                                                    <ScrollPeel images={section.scrollImages} altText={section.title} />
                                                ) : section.linkPreview ? (
                                                    <a href={section.linkPreview.url} target="_blank" rel="noopener noreferrer" className={styles.iframeWrapper}>
                                                        <div className={styles.iframeOverlay}>
                                                            <span>View Live Site</span>
                                                        </div>
                                                        <img src={section.linkPreview.src} alt={`${project.title} Website Preview`} className={styles.iframeMedia} />
                                                    </a>
                                                ) : section.heroVideo ? (
                                                    <video
                                                        src={section.heroVideo}
                                                        className={styles.narrativeMedia}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        controls
                                                    />
                                                ) : Array.isArray(section.heroImage) ? (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                                        {section.heroImage.map((img, idx) => (
                                                            <img key={idx} src={img} alt={`${project.title} - ${section.title} ${idx + 1}`} className={styles.narrativeMedia} />
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <img src={section.heroImage} alt={`${project.title} - ${section.title}`} className={`${styles.narrativeMedia} ${section.imageClassName ? styles[section.imageClassName] : ''}`} />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                    {/* Full-width bento grid between sections */}
                    {((section.gallery && section.gallery.length > 0) || (section.videos && section.videos.length > 0)) && (
                        <div className={styles.bentoGreyFullWidth}>
                            <div className={styles.bentoSection} style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
                                <div className={styles.bentoGrid}>
                                    {/* Videos */}
                                    {section.videos && section.videos.map((video, vIndex) => (
                                        <div key={`video-${vIndex}`} className={`${styles.bentoItem} ${styles.bentoWide}`}>
                                            <video
                                                src={video}
                                                className={styles.bentoMedia}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls
                                            />
                                        </div>
                                    ))}
                                    {/* Gallery images */}
                                    {section.gallery && section.gallery.map((item, imgIndex) => {
                                        const isObj = item && typeof item === 'object' && !Array.isArray(item);
                                        const src = isObj ? item.src : item;
                                        const customClass = isObj && item.className ? (styles[item.className] || '') : '';

                                        return (
                                            <div key={`img-${imgIndex}`} className={`${styles.bentoItem} ${customClass}`.trim()}>
                                                {Array.isArray(item) ? (
                                                    <Carousel item={item} projectTitle={project.title} index={imgIndex} />
                                                ) : (isObj && item.type === 'video') ? (
                                                    <video src={src} className={styles.bentoMedia} autoPlay muted loop playsInline />
                                                ) : (
                                                    <img src={src} alt={`${project.title} detail ${imgIndex + 1}`} className={styles.bentoMedia} />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Flat gallery bento grid for projects without sections */}
            {!project.sections && project.gallery && project.gallery.length > 0 && (
                <div className={styles.bentoSection}>
                    <div className={styles.bentoGrid}>
                        {project.gallery.map((item, imgIndex) => {
                            const isObj = item && typeof item === 'object' && !Array.isArray(item);
                            const src = isObj ? item.src : item;
                            const customClass = isObj && item.className ? (styles[item.className] || '') : '';

                            return (
                                <div key={`img-${imgIndex}`} className={`${styles.bentoItem} ${customClass}`.trim()}>
                                    {Array.isArray(item) ? (
                                        <Carousel item={item} projectTitle={project.title} index={imgIndex} />
                                    ) : (isObj && item.type === 'video') ? (
                                        <video src={src} className={styles.bentoMedia} autoPlay muted loop playsInline />
                                    ) : (
                                        <img src={src} alt={`${project.title} detail ${imgIndex + 1}`} className={styles.bentoMedia} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className={styles.bottomBackBtnContainer}>
                <Link to="/" className={styles.backLink}>
                    &larr; Back to Projects
                </Link>
            </div>
        </div >
    );
};

export default ProjectDetail;
