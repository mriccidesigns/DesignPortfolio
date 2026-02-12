import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ id, title, description, image, category, previewVideo }) => {
    return (
        <Link to={`/project/${id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {previewVideo ? (
                    <div className={styles.mediaContainer}>
                        <img
                            src={image || 'https://via.placeholder.com/400x300'}
                            alt={title}
                            className={styles.image}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
                            }}
                        />
                        <video
                            src={previewVideo}
                            className={styles.videoPreview}
                            muted
                            loop
                            playsInline
                            autoPlay // Auto play for now, or on hover via CSS/JS? user asked for "project preview... soft spa hero animation"
                        // If we want hover only, we need JS state. But CSS hover display block is easier.
                        />
                    </div>
                ) : (
                    <img
                        src={image || 'https://via.placeholder.com/400x300'}
                        alt={title}
                        className={styles.image}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
                        }}
                    />
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.link}>
                    View Project <span className={styles.arrow}>→</span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
