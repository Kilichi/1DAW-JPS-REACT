import { useState } from 'react';
import javaCalculadora from '../../assets/ejercicios/javaCalculadora.png';
import LinkButton from '../linkButton/main';

const DATA = {
    "Programación": {
        URL: '#',
        CategoryIcon: 'fas fa-cogs',
        CategoryTittle: 'Calculadora JAVA',
        CategoryDescription: 'Calculadora en consola con JAVA',
        CategoryCount: 'JAVA',
        Image: javaCalculadora,
        Code: 'https://github.com/kilichi'
    },
    "Bases de Datos": {
        URL: '#',
        CategoryIcon: 'fas fa-database',
        CategoryTittle: 'Bases de Datos',
        CategoryDescription: 'Proyectos con gestión de datos',
        CategoryCount: 'En desarrollo',
        Image: 'https://example.com/programacion.png',
    },
    "Entornos de Desarrollo": {
        URL: '#',
        CategoryIcon: 'fas fa-tools',
        CategoryTittle: 'Entornos de Desarrollo',
        CategoryDescription: 'Herramientas y diagramas de flujo',
        CategoryCount: '2 recursos',
        Image: 'https://example.com/programacion.png',
    }
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = async (projectKey) => {
        setSelectedProject(DATA[projectKey]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>

            <h2 className='section-title'>PROYECTOS PRINCIPALES</h2>
            <section className="categories-grid">
                {Object.keys(DATA).map((projectKey) => (
                    <div 
                        key={projectKey}
                        className="category-card" 
                        onClick={() => handleCardClick(projectKey)}
                    >
                        <div className="category-icon">
                            <i className={DATA[projectKey].CategoryIcon}></i>
                        </div>
                        <div className="category-title">
                            {DATA[projectKey].CategoryTittle}
                        </div>
                        <p className="category-description">
                            {DATA[projectKey].CategoryDescription}
                        </p>
                        <span className="project-count">
                            {DATA[projectKey].CategoryCount}
                        </span>
                    </div>
                ))}
            </section>

            {isModalOpen && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-header">
                            <i className={selectedProject.CategoryIcon}></i>
                            <h2>{selectedProject.CategoryTittle}</h2>
                        </div>

                        <img src={selectedProject.Image} alt={selectedProject.CategoryDescription} />
                    
                        <div className="modal-body">
                            <p>{selectedProject.CategoryDescription}</p>
                            <div className="info-buttons">
                                <span className="modal-count">{selectedProject.CategoryCount}</span>
                                <LinkButton link={selectedProject.Code} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export default Projects