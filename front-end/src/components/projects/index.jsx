import { useEffect, useState } from 'react';
import LinkButton from '../linkButton/main';

// Configuración de la API
const API_CONFIG = {
    BASE_URL: 'https://onedaw-jps-react.onrender.com',
    ENDPOINTS: {
        ARTICLES: '/api/articulos'
    }
};

// Función para construir URL completa de imagen
const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    // Si ya es una URL completa, devolverla tal cual
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }
    
    // Si es una ruta relativa, agregar la base URL
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${API_CONFIG.BASE_URL}${cleanPath}`;
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ARTICLES}`);
                
                if (!response.ok) {
                    throw new Error('Error al cargar los proyectos');
                }
                
                const data = await response.json();
                
                // Convertir objeto a array si es necesario
                let projectsArray = [];
                if (Array.isArray(data)) {
                    projectsArray = data;
                } else if (typeof data === 'object' && data !== null) {
                    // Si es un objeto, convertirlo a array de valores
                    projectsArray = Object.keys(data).map(key => ({
                        id: key,
                        name: key,
                        ...data[key]
                    }));
                }
                
                setProjects(projectsArray);
                setError(null);
            } catch (error) {
                console.error("Error al obtener artículos:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <p>Cargando proyectos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="empty-container">
                <p>No hay proyectos disponibles</p>
            </div>
        );
    }

    return (
        <>
            <h2 className='section-title'>PROYECTOS PRINCIPALES</h2>
            <section className="categories-grid">
                {projects.map((project, index) => (
                    <div 
                        key={project.id || index}
                        className="category-card" 
                        onClick={() => handleCardClick(project)}
                    >
                        <div className="category-icon">
                            <i className={project.CategoryIcon || 'fas fa-folder'}></i>
                        </div>
                        <div className="category-title">
                            {project.CategoryTittle || project.title || project.name}
                        </div>
                        <p className="category-description">
                            {project.CategoryDescription || project.description || 'Sin descripción'}
                        </p>
                        <span className="project-count">
                            {project.CategoryCount || project.count || ''}
                        </span>
                    </div>
                ))}
            </section>

            {isModalOpen && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-header">
                            <i className={selectedProject.CategoryIcon || 'fas fa-folder'}></i>
                            <h2>{selectedProject.CategoryTittle || selectedProject.title || selectedProject.name}</h2>
                        </div>

                        {selectedProject.Image && (
                            <img 
                                src={getImageUrl(selectedProject.Image)} 
                                alt={selectedProject.CategoryDescription || selectedProject.description || 'Proyecto'}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    console.error('Error al cargar imagen:', selectedProject.Image);
                                }}
                            />
                        )}
                    
                        <div className="modal-body">
                            <p>{selectedProject.CategoryDescription || selectedProject.description || 'Sin descripción'}</p>
                            <div className="info-buttons">
                                <span className="modal-count">
                                    {selectedProject.CategoryCount || selectedProject.count || ''}
                                </span>
                                {selectedProject.Code && (
                                    <LinkButton link={selectedProject.Code} />
                                )}
                                {selectedProject.URL && selectedProject.URL !== '#' && (
                                    <a 
                                        href={selectedProject.URL} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        Ver más
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;